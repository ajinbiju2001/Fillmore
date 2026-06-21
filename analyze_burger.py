from PIL import Image
import numpy as np

img = Image.open("/Users/ajinb/Documents/Fillmore /public/images/exploded_burger_transparent.png")
arr = np.array(img)
alpha = arr[:, :, 3]
has_content = np.any(alpha > 10, axis=1)

# Print a low-res ASCII representation of the vertical density
block_size = len(has_content) // 40
for i in range(40):
    start = i * block_size
    end = (i+1) * block_size
    density = np.sum(has_content[start:end]) / block_size
    bar = "#" * int(density * 20)
    print(f"{start:4d} - {end:4d} : {bar}")
