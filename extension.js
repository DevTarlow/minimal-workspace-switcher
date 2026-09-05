import St from 'gi://St';
import Clutter from 'gi://Clutter';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as PanelMenu from 'resource:///org/gnome/shell/ui/panelMenu.js';
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';

export default class MinimalWorkspaceSwitcherExtension extends Extension {
    enable() {
        // dontCreateMenu:true so the indicator is a pure container - the ws-box
        // children are the clickable elements (false would add a click gesture +
        // empty popup menu that bubbles clicks from the boxes).
        this._indicator = new PanelMenu.Button(0.0, 'Minimal Workspace Switcher', true);
        this._box = new St.BoxLayout({
            style_class: 'workspace-box-container',
            x_align: Clutter.ActorAlign.CENTER,
            y_align: Clutter.ActorAlign.CENTER
        });
        this._indicator.add_child(this._box);
        this._workspaceManager = global.workspace_manager;
        this._signals = [
            this._workspaceManager.connect('active-workspace-changed', () => this._renderBoxes()),
            this._workspaceManager.connect('notify::n-workspaces', () => this._renderBoxes())
        ];
        this._renderBoxes();
        Main.panel.addToStatusArea('minimal-workspace-switcher', this._indicator);
    }
    disable() {
        if (this._signals) {
            this._signals.forEach(id => this._workspaceManager.disconnect(id));
            this._signals = null;
        }
        if (this._indicator) {
            this._indicator.destroy();
            this._indicator = null;
        }
    }
    _renderBoxes() {
        this._box.destroy_all_children();
        let totalWs = this._workspaceManager.get_n_workspaces();
        let activeIdx = this._workspaceManager.get_active_workspace_index();
        for (let i = 0; i < totalWs; i++) {
            let wsButton = new St.Button({
                style_class: i === activeIdx ? 'ws-box active' : 'ws-box',
                can_focus: true,
                reactive: true,
                child: new St.Label({
                    text: `${i + 1}`,
                    y_align: Clutter.ActorAlign.CENTER
                })
            });
            wsButton.connect('clicked', () => {
                let targetWs = this._workspaceManager.get_workspace_by_index(i);
                if (targetWs) targetWs.activate(global.get_current_time());
            });
            this._box.add_child(wsButton);
        }
    }
}
