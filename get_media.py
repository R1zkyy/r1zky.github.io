import os
import glob
import json

# Get all media files
files = glob.glob('C:/Users/Unknown/.gemini/antigravity/brain/faf9e029-48c6-4475-aad6-6023e1f9ce73/*.*')
files = [f for f in files if f.endswith(('.png', '.jpg', '.jpeg'))]

# Sort by modification time oldest to newest
files.sort(key=os.path.getmtime)

# We care about the last 13 files
latest = files[-13:]
results = []
for f in latest:
    results.append(os.path.basename(f))

with open('C:/Users/Unknown/Documents/STUDY/Event/portfolio/media_list.json', 'w') as f:
    json.dump(results, f)
print('Done!')
