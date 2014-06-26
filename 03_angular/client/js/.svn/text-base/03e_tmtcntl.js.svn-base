// Track My Things Controller
function TmtCntl($scope) {
  $scope.user = {
        fName: 'Jane',
        lName: 'Smith'
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
        

    $scope.collectionDataRows_1 = [
        ['Car - Caboose', 'Bay Window', 'Steel Side', 'SP', '1745','E-R Models','07-23-1998','12.00','18.00'], 
        ['Car - Caboose','Bay Window','Steel Side','SP','1748','E-R Models','07-23-1998','12.00','18.00'],
        ['Car - Caboose','Bay Window','Steel Side','SP','4755','Model Power Mfg. Co. ','04-23-1994','7.00','10.00']
    ];

    $scope.collectionDataRows_2 = [
        ['Car - Caboose', 'Bay Window', 'Steel Side - Riveted', 'SP', '1235', 'Con-Cor', '4/23/1994', '7.00', '10.00'],
        ['Car - Caboose', 'Bay Window', 'Steel Side - Riveted', 'SP', '1343', 'Con-Cor', '4/23/1994', '7.00', '10.00'],
        ['Car - Caboose', 'Bay Window', 'Steel Side - Riveted', 'SP', '1848', 'Walthers', '8/12/1998', '12.00', '14.00']
    ];
    
    $scope.collectionData = {
        fields : ['Catgy', 'Type', 'Sub Type', 'RR', 'Road Nbr', 'Mfg Name', 'Invty Purch Dt', 'Invty Cost', 'Invty Value'],
        rows: $scope.collectionDataRows_1
    };
    
    $scope.toggleData = function(){
        if ($scope.collectionData.rows == $scope.collectionDataRows_1){
            $scope.collectionData.rows = $scope.collectionDataRows_2;
        }
        else {
            $scope.collectionData.rows = $scope.collectionDataRows_1;
        }
    };
    
    // If the passed subscription is the "currColl" (current collection)
    // return empty string, else return "font-white" to hide the menu Checkmark
    $scope.getSubsCollCheckmarkFont = function(subscription){
      if ($scope.collections.currColl === subscription){
        return '';
      }
      return 'font-white'
    };
    
    // Show the specified collection
    // TODO: finish this function
    $scope.showCollection = function(subscription){
      if (!($scope.collections.currColl === subscription)){
        $scope.collections.currColl = subscription;
        console.log('show collection ' + subscription);
      }
    };

    // If the passed view is the "currView" (current view)
    // return empty string, else return "font-white" to hide the menu Checkmark
    $scope.getViewCheckmarkFont = function(view){
      if ($scope.collections.currView === view){
        return '';
      }
      return 'font-white'
    };
    
    // Show the specified view
    // TODO: finish this function
    $scope.showView = function(view){
      if (!($scope.collections.currView === view)){
        $scope.collections.currView = view;
        console.log('show view ' + view);
      }
    }

}
