from PIL import Image
import numpy as np
import cv2

img = Image.open("/Users/ajinb/Documents/Fillmore /public/images/exploded_burger_transparent.png")
arr = np.array(img)

alpha = arr[:, :, 3]
_, thresh = cv2.threshold(alpha, 10, 255, cv2.THRESH_BINARY)
num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(thresh, connectivity=8)

# Create a clean mask with only large components
clean_mask = np.zeros_like(thresh)
for i in range(1, num_labels):
    if stats[i, cv2.CC_STAT_AREA] > 5000:
        clean_mask[labels == i] = 255

# Now find connected components on the clean mask
num_labels2, labels2, stats2, centroids2 = cv2.connectedComponentsWithStats(clean_mask, connectivity=8)

print(f"After removing noise, found {num_labels2 - 1} main components.")
for i in range(1, num_labels2):
    area = stats2[i, cv2.CC_STAT_AREA]
    y = stats2[i, cv2.CC_STAT_TOP]
    print(f"Main Component {i}: area={area}, y={y}")

