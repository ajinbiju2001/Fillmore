from PIL import Image
from rembg import remove
import numpy as np
import os
import shutil

input_path = "/Users/ajinb/Downloads/ChatGPT Image Jun 21, 2026, 05_24_38 PM.png"
out_dir = "/Users/ajinb/Documents/Fillmore /public/images"
hero_raw = os.path.join(out_dir, "hero_mega_raw.png")
hero_trans = os.path.join(out_dir, "hero_mega_transparent.png")

# Copy the raw image just in case
shutil.copy2(input_path, hero_raw)
print(f"Copied raw image to {hero_raw}")

print("Removing background...")
with open(input_path, 'rb') as i:
    input_data = i.read()
    output_data = remove(input_data)

with open(hero_trans, 'wb') as o:
    o.write(output_data)

print(f"Saved transparent image to {hero_trans}")
