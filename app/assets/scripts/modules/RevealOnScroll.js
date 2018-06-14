import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(eleName, offset) {
		this.itemsToReveal = $(eleName);
		this.offset = offset;
		this.hideInit();
		this.createWaypoints();
	}

	hideInit() {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints() {
		var that = this;
		this.itemsToReveal.each(function() {
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass("reveal-item--is-visable");
				},
				offset: that.offset
			});
		});
	}
}

export default RevealOnScroll;
