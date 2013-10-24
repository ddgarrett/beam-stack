// Track My Things Controller
function TmtCntl($scope) {
  $scope.user = {
        fName: 'Jane',
        lName: 'Smith', 
    };
    
  $scope.collections = {
        subscribed : ['Trains', 'Music', 'Books'],
        currColl : 'Trains',
        currView: 'Complete Database Listing',
        views : ['Complete Database Listing', 
                 'Coupler Conversion Maintenance Report',
                 'Duplicate Road Number Detection Report', 
                 'Items For Sale', 
                 'Locomotive Roster File by Railroad', 
                 'Owned Rolling Stock Roster File by Railroad',
                 'Physical Inventory by Storage Location', 
                 'Shopping List',
                 'Wish List']
    };
}
