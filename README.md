# Minimal Workspace Switcher

A tiny GNOME Shell extension that puts clickable workspace boxes in the top bar. One box per workspace, click to switch. The active workspace is highlighted in blue.

Built for GNOME Shell 45 through 50 (Ubuntu 24.04 and newer). Tested on GNOME Shell 50.1.

## Install

GNOME Shell only reads extension folders when your session starts, so a log out and back in is required after copying the files.

Terminal way:

```bash
# 1. Copy the files into a folder named exactly like the extension uuid
mkdir -p ~/.local/share/gnome-shell/extensions/minimal-workspace-switcher@mossaistudio.com
cp extension.js metadata.json stylesheet.css ~/.local/share/gnome-shell/extensions/minimal-workspace-switcher@mossaistudio.com/

# 2. Log out and back in (or restart), then confirm it loaded
gnome-extensions info minimal-workspace-switcher@mossaistudio.com
```

The info command should show `State: ACTIVE`. If it shows `State: INACTIVE`, enable it:

```bash
gnome-extensions enable minimal-workspace-switcher@mossaistudio.com
```

Manual way: copy the three files into `~/.local/share/gnome-shell/extensions/minimal-workspace-switcher@mossaistudio.com/` (create that folder), then log out and back in. The folder name must match the uuid in `metadata.json` exactly.

## Usage

Numbered boxes appear on the right side of the top bar. The blue box is the workspace you are on. Click any box to jump to that workspace.

## Uninstall

```bash
gnome-extensions disable minimal-workspace-switcher@mossaistudio.com
rm -rf ~/.local/share/gnome-shell/extensions/minimal-workspace-switcher@mossaistudio.com
```

## Files

- `extension.js` - the extension logic (ESM, no build step)
- `metadata.json` - extension manifest (uuid must match the folder name)
- `stylesheet.css` - the box styling

## Notes

- Works on Wayland and X11.
- GNOME Shell versions 45 to 50 are declared in `metadata.json`; on an older shell (Ubuntu 22.04 or earlier) it will not load.
