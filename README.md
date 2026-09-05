# Minimal Workspace Switcher

A small GNOME Shell extension that shows one clickable box for each of your workspaces in the top bar. The box for the workspace you are on is blue. Click any other box to jump to that workspace.

Works with GNOME Shell 45 through 50 (Ubuntu 24.04 and newer). Tested on GNOME Shell 50.1.

## What you need before you start

- Ubuntu 24.04 or newer, or another setup running GNOME Shell 45 to 50.
- A log out and back in after installing. GNOME Shell reads extension folders when you log in, so new extensions show up after a restart of your session.

## Install

Pick one way to get the files in place. Both put the same three files into the same folder.

### Way 1: terminal (copy-paste)

Open a terminal and paste these lines one after another:

```bash
git clone https://github.com/DevTarlow/minimal-workspace-switcher.git
cd minimal-workspace-switcher
mkdir -p ~/.local/share/gnome-shell/extensions/minimal-workspace-switcher@mossaistudio.com
cp extension.js metadata.json stylesheet.css ~/.local/share/gnome-shell/extensions/minimal-workspace-switcher@mossaistudio.com/
```

A note on the copy line: it looks for the files in whatever folder your terminal is in. The `cd` line above moves you into the cloned folder first, which is why the copy works. If you run the copy from your home folder you will see "cp: cannot stat 'extension.js': No such file or directory".

Downloaded the ZIP instead of using git clone? Extract it, open a terminal inside the extracted folder, and run the `mkdir` and `cp` lines there.

### Way 2: files by hand

Create this folder:

```
~/.local/share/gnome-shell/extensions/minimal-workspace-switcher@mossaistudio.com
```

Then copy these three files into it: `extension.js`, `metadata.json`, `stylesheet.css`.

The folder name must match the uuid written inside `metadata.json`. Keep it exactly as shown.

## Turn it on

Log out and back in (top-right menu, Log Out), then switch the extension on.

In the Extensions app:

1. Open the Extensions app. Search for "Extensions", or click the puzzle piece icon on the top bar.
2. Find **Minimal Workspace Switcher** in the list.
3. Flip its switch to on. If every extension in the list is greyed out, turn on the master switch at the top of the window first.

Or with a terminal:

```bash
gnome-extensions enable minimal-workspace-switcher@mossaistudio.com
```

Check that it loaded:

```bash
gnome-extensions info minimal-workspace-switcher@mossaistudio.com
```

You want to see `State: ACTIVE`.

## Using it

- The top bar shows one box per workspace, numbered 1, 2, 3 and so on.
- The blue box is the workspace you are looking at now.
- Hover over a box to highlight it, and click to move to that workspace.

## Updating

Inside the `minimal-workspace-switcher` folder from the install above:

```bash
git pull
cp extension.js metadata.json stylesheet.css ~/.local/share/gnome-shell/extensions/minimal-workspace-switcher@mossaistudio.com/
```

Then log out and back in.

## Turning it off or removing it

To turn it off: flip the switch off in the Extensions app, or run:

```bash
gnome-extensions disable minimal-workspace-switcher@mossaistudio.com
```

To remove it completely, delete the folder `~/.local/share/gnome-shell/extensions/minimal-workspace-switcher@mossaistudio.com`, then log out and back in.

## Files in this repo

- `extension.js`: the extension code. Modern JavaScript, no build step needed.
- `metadata.json`: describes the extension. The uuid inside must match the install folder name.
- `stylesheet.css`: how the boxes look.

## Notes

- Works on both Wayland and X11 sessions.
- The supported GNOME Shell versions are listed in `metadata.json`. On an older shell (Ubuntu 22.04 or earlier) the extension will not load.
