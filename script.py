import os
import shutil

brain_dir = 'C:/Users/Unknown/.gemini/antigravity/brain/8bfde537-09e9-4e85-8f11-7ea75b1521b4'
dest_dir = 'C:/Users/Unknown/Documents/STUDY/Event/portfolio/public/certs'

# SIG cert = most recent 437KB PNG (media__1772330258937.png)
sig_src  = os.path.join(brain_dir, 'media__1772330258937.png')
sig_dst  = os.path.join(dest_dir, 'sig_cert.jpg')

# Scoring Board = oldest 123KB JPG (media__1772312790448.jpg)
sb_src   = os.path.join(brain_dir, 'media__1772312790448.jpg')
sb_dst   = os.path.join(dest_dir, 'scoring_board.jpg')

shutil.copy2(sig_src, sig_dst)
print(f"✅ Copied SIG cert  → {sig_dst}")

shutil.copy2(sb_src, sb_dst)
print(f"✅ Copied Scoring Board → {sb_dst}")
