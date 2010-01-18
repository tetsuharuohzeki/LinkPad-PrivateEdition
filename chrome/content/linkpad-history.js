var LinkpadHistory = {

	onLoad: function Linkpad_onLoad() {
		// Insert "Save Link to Link Pad" before the cut item
		document.getElementById("placesContext")
		        .insertBefore(document.getElementById("linkpad_saveContext-history"),
		document.getElementById("placesContext_cut"));
	},

	saveContext: function Linkpad_saveContext() {
		// no need to check gHistoryTree.view.selection.count
		// node will be null if there is a multiple selection
		// or if the selected item is not a URI node
		var node = gHistoryTree.selectedNode;

		if (node && PlacesUtils.nodeIsURI(node) && !PlacesUIUtils.checkURLSecurity(node)) {
			return;
		}

		if (node && PlacesUtils.nodeIsURI(node)) {
			window.parent.Linkpad.saveItem(node.uri, node.title);
		}
	}
};