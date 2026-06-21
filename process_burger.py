from PIL import Image
from rembg import remove
import numpy as np
import os

input_path = "/Users/ajinb/Documents/Fillmore /exploded_burger_raw.png"
out_dir = "/Users/ajinb/Documents/Fillmore /public/images"

print("Loading and removing background...")
with open(input_path, 'rb') as i:
    input_data = i.read()
    output_data = remove(input_data)

# Save the full transparent version just in case
full_trans = os.path.join(out_dir, "exploded_burger_transparent.png")
with open(full_trans, 'wb') as o:
    o.write(output_data)

print(f"Saved full transparent image to {full_trans}")

# Now split it into individual layers
img = Image.open(full_trans)
arr = np.array(img)

# Find rows that have any non-transparent pixels
alpha = arr[:, :, 3]
has_content = np.any(alpha > 10, axis=1) # Boolean array of shape (h,)

# Find contiguous segments of True
segments = []
start = None
for i, val in enumerate(has_content):
    if val and start is None:
        start = i
    elif not val and start is not None:
        # Require at least some height to avoid tiny noise
        if i - start > 20:
            segments.append((start, i))
        start = None
if start is not None and (len(has_content) - start > 20):
    segments.append((start, len(has_content)))

print(f"Found {len(segments)} distinct vertical segments.")

names = ["top_bun", "lettuce", "onions", "patties", "bottom_bun"]

for i, (y_start, y_end) in enumerate(segments):
    if i < len(names):
        name = names[i]
    else:
        name = f"layer_{i}"
        
    # Crop horizontally, but keep full width
    layer_arr = np.zeros_like(arr)
    layer_arr[y_start:y_end, :, :] = arr[y_start:y_end, :, :]
    
    # We will NOT crop the bounding box, so they all have the same canvas size!
    # This guarantees they align perfectly when stacked.
    layer_img = Image.fromarray(layer_arr)
    out_path = os.path.join(out_dir, f"epic_{name}.png")
    layer_img.save(out_path)
    print(f"Saved {name} to {out_path} (lines {y_start}-{y_end})")

print("Processing complete!")
