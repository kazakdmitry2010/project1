angular
    .module('MdMenuOffsetDemo', ['ngMaterial'])
    .controller('MdMenuOffsetDemoController', function($scope, $q, $timeout) {
        this.getMatches = function(searchText) {
            var deferred = $q.defer();

            $timeout(function() {
                var states = getStates().filter(function(state) {
                    return (state.name.toUpperCase().indexOf(searchText.toUpperCase()) !== -1 || state.abbreviation.toUpperCase().indexOf(searchText.toUpperCase()) !== -1);
                });
                deferred.resolve(states);
            }, 1500);

            return deferred.promise;
        }
    });
