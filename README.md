# Minimal Workspace Switcher

A tiny GNOME Shell extension that puts clickable workspace boxes in the top bar. One box per workspace, click to switch. The active workspace is highlighted in blue.

Built for GNOME Shell 45 through 50 (Ubuntu 24.04 and newer). Tested on GNOME Shell 50.1.

## Install

GNOME Shell only reads extension folders when your session starts, so log out and back in after copying the files.

### Terminal way (easiest)

Open a terminal and paste these lines one after another. They work from any folder:

```bash
git clone https://github.com/DevTarlow/minimal-workspace-switcher.git
cd minimal-workspace-switcher
mkdir -p ~/.local/share/gnome-shell/extensions/minimal-workspace-switcher@mossaistudio.com
cp extension.js metadata.json stylesheet.css ~/.local/share/gnome-shell/extensions/minimal-workspace-switcher@mossaistudio.com/
```

Notes:

- The `cp` line only works when your terminal is inside the `minimal-workspace-switcher` folder, which is what the `cd` line does. Running it from your home folder gives "cp: cannot stat 'extension.js': No such file or directory".
- Downloaded the ZIP instead of using git clone? Extract it, then open a terminal inside the extracted folder and run the `mkdir` and `cp` lines there.
- The folder name must match the uuid in `metadata.json` exactly.

Then log out and back in (top-right menu > Log Out), and confirm it loaded:

```bash
gnome-extensions info minimal-workspace-switcher@mossaistudio.com
```

You want to see `State: ACTIVE`. If it shows `State: INACTIVE`, enable it:

```bash
gnome-extensions enable minimal-workspace-switcher@mossaistudio.com
```

### Manual way

Create the folder `~/.local/share/gnome-shell/extensions/minimal-workspace-switcher@mossaistudio.com/` and copy the three files (`extension.js`, `metadata.json`, `stylesheet.css`) into it. Then log out and back in.

## Usage

Numbered boxes appear on the right side of the top bar. The blue box is the workspace you are on. Click any box to jump to that workspace.

## Updating

Inside the `minimal-workspace-switcher` folder from the install above, run:

```bash
git pull
cp extension.js metadata.json stylesheet.css ~/.local/share/gnome-shell/extensions/minimal-workspace-switcher@mossaistudio.com/
```

Then log out and back in.

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
