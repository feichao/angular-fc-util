(function() {
  'use strict';

  var app = angular.module('fc.util', []);

  app.directive('fcclear', FcClear);

  function FcClear() {
    return {
      restrict: 'A',
      scope: {
        fcClass: '@',
        fcIconClass: '@'
      },
      controllerAs: 'vm',
      template: '',
      compile: ClearCompile
    };
  }

  function ClearCompile(tEle, tAttrs, transcludeFn) {
    var tplDiv = angular.element('<div class="fc-clear-content"></div>');
    var tplClear = angular.element([
      '<div class="fc-clear-icon">',
      ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">',
      '   <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>',
      ' </svg>',
      ' <div class="fc-clear-tooltip">Clear</div>',
      '</div>'
    ].join(''));

    var model = tEle.attr('ng-model');
    tplClear.attr('ng-click', model + '=""');
    tplClear.attr('ng-show', model);

    var tplEle = tEle.clone();
    var contentClass = tplEle.attr('fc-class') || '';
    var iconClass = tplEle.attr('fc-icon-class') || '';
    
    tplEle.removeAttr('fcclear');
    tplEle.removeAttr('fc-class');
    tplEle.removeAttr('fc-icon-class');

    tplDiv.append(tplEle);
    tplDiv.append(tplClear);

    tplDiv.addClass(contentClass);
    tplClear.addClass(iconClass);

    tEle.after(tplDiv);

    return function(scope, ele, attrs) {
      ele.remove();
    };
  }

  app.directive('fcDocClick', FcDocClick);

  var contains = function(container, contained) {
    var node = contained.parentNode;
    while (node !== null && node !== container) {
      node = node.parentNode;
    }
    return node !== null;
  };

  function FcDocClick(doc) {
    return {
      restrict: 'A',
      link: function($scope, $element, $attributes) {
        var fun, onDocClick;
        fun = $attributes.fcDocClick;
        onDocClick = function(event) {
          if (!contains($element[0], event.target)) {
            $scope.$apply(fun);
          }
        };
        doc.on('click', onDocClick);
        $element.on('$destroy', function() {
          doc.off('click', onDocClick);
        });
      }
    };
  }

  FcDocClick.$inject = ['$document'];
})();
