// static/admin/custom.js
class SidebarConfigControl extends window.React.Component {
  render() {
    return window.React.createElement("div", null,
      window.React.createElement("label", null, "Sidebar Pages")
      // Add more UI elements for page selection here
    );
  }
}

window.CMS.registerWidget("sidebarConfig", SidebarConfigControl);
