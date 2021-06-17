# SSH: Initial Setup

Open a terminal
```bash
cd ~
ssh-keygen -t ed25519
```

Do not use a password and accept the defaults unless you know exactly what you're doing.

Log into your account on GitHub and under your settings find GPG and SSH keys.

Back in the terminal:
```bash
cat ~/.ssh/id_ed25519.pub
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIBphtM6UsFNIm3d5dPOeuQggHvySvRIfZ1JY6QtjepJi punchcode@Punchcodes-MacBook-Pro.local
```

**MAKE SURE THAT YOU USE THE `id_ed25519.pub` FILE. The other one must be kept secret and never exposed.**

Copy the entire line that starts with ssh-ed25519 to the clipboard.

In GitHub, click on add an SSH key and paste the key. GitHub will show an error if it didn't work correctly. Make sure that this is completed successfully before continuing.
