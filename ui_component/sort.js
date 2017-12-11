var registry = require('uiRegistry'),
    columnName = registry.get('product_listing.product_listing.product_columns.name');

columnName.exportSorting = function () {
    var provider = registry.get('product_listing.product_listing_data_source'),
        utils = require('mageUtils'),
        data = utils.copy(provider.data),
        items = data.items;

    provider.trigger('reload');

    items.sort(function(a, b) {
        return this.sorting === 'asc' ? a.name < b.name : a.name > b.name;
    }.bind(this));
    provider.setData(data);

    provider.trigger('reloaded');
};
