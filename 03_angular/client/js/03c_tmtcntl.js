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
    
    $scope.collectionData = {
        fields : ['Catgy', 'Type', 'Sub Type', 'RR', 'Road Nbr', 'Mfg Name', 'Invty Purch Dt', 'Invty Cost', 'Invty Value'],
        rows : [
        ['Car - Caboose', 'Bay Window', 'Steel Side', 'SP', '1745','E-R Models','07-23-1998','12.00','18.00'], 
        ['Car - Caboose','Bay Window','Steel Side','SP','1748','E-R Models','07-23-1998','12.00','18.00'],
        ['Car - Caboose','Bay Window','Steel Side','SP','4755','Model Power Mfg. Co. ','04-23-1994','7.00','10.00']
      ]
    };

}
