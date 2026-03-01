import shutil
import os

mapping = {
  "media__1772302151421.jpg": "pkkmb_technogear.jpg",
  "media__1772302167547.png": "pre_comp.png",
  "media__1772302203543.png": "sshm_run.png", # Failsafe against SSHMRun
  "media__1772302223822.png": "sshm_run_alt.png", # Subagent said this was SSHMRun
  "media__1772302238141.png": "fpc_2025.png",
  "media__1772302248557.png": "navigasi_karir.png",
  "media__1772302267462.jpg": "berbagi_kebahagiaan.jpg",
  "media__1772302318103.png": "chibicon_7.png",
  "media__1772302343531.jpg": "chibicon_9.jpg",
  "media__1772302361629.png": "fpc_2024.png",
  "media__1772302389083.jpg": "ieee_webinar.jpg",
  "media__1772302440834.png": "lkmm_pra_td.png",
  "media__1772302450830.png": "chibicon_1.png"
}

src_dir = "C:/Users/Unknown/.gemini/antigravity/brain/faf9e029-48c6-4475-aad6-6023e1f9ce73/"
dst_dir = "C:/Users/Unknown/Documents/STUDY/Event/portfolio/public/certs/"

for src_name, dst_name in mapping.items():
    src = os.path.join(src_dir, src_name)
    dst = os.path.join(dst_dir, dst_name)
    if os.path.exists(src):
        shutil.copyfile(src, dst)
        print(f"Copied {src_name} to {dst_name}")
    else:
        print(f"MISSING {src_name}")
