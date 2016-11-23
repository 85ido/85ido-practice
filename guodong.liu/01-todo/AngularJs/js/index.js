/**
 * Created by Sunday on 16/11/22.
 *
 * 1.改变todo的时候,输入和显示的状态切换,焦点的获取和失去
 * 2. // $scope.$showTodos = 直接调用等于号更改数据源不行。
 */
angular.module('todoApp',[])
    .controller('TodoCon',function ($scope) {
        $scope.$selectType = 'all';
        $scope.$showTodos = [];
        $scope.$todos = [
            {
                title:'one',
                complated:false,
                isEditing:false
            },
            {
                title:'two',
                complated:true,
                isEditing:false
            }
        ]
        $scope.$showTodos = $scope.$todos;

        $scope.$on('ShowDataChange',function (event, msg) {
            $scope.$selectType = msg;
            $scope.onDataToView();
        });

        $scope.$on('clearComplated',function (event,msg) {
            $scope.$todos = $scope.$todos.filter(function (todo) {
                return !todo.complated;
            });
        });

        $scope.$watch('$todos',function (newVal,oldVal) {
            $scope.onDataToView();
        },true);

        $scope.onDataToView = function () {
            switch ($scope.$selectType){
                case 'all':
                default:
                    $scope.$showTodos = $scope.$todos;
                    break;

                case 'active':
                    $scope.$showTodos = $scope.$todos.filter(function (todo) {
                        return !todo.complated;
                    });
                    break;

                case 'completed':
                    $scope.$showTodos = $scope.$todos.filter(function (todo) {
                        return todo.complated;
                    });
                    break;
            }
        };
    })
    .controller('TodoHeader',function ($scope,$rootScope) {
        $scope.headerInputText = '';
        $scope.onSubmit = function () {
            var inputStr = $scope.headerInputText.trim();
            if (inputStr.length == 0){
                return;
            };
            $scope.$todos.unshift({
                title:inputStr,
                complated:false,
                isEditing:false
            });
            $scope.headerInputText = '';
        };
    })
    .controller('TodoMain',function ($scope,$rootScope) {
        $scope.mainIsSelectAll = false;
        $scope.originalTitle = '';
        $scope.onSelectAllClick = function () {
            $scope.mainIsSelectAll = !$scope.mainIsSelectAll;
            angular.forEach($scope.$todos,function (todo) {
                todo.complated = $scope.mainIsSelectAll;
            });
        }
        
        $scope.onDeleteItemClick = function ($index,todos) {
            todos.splice($index,1);
        }

        $scope.onEditBlur = function (e,todo) {
            todo.isEditing = false;
        }
        
        $scope.onItemDbClick = function (todo) {
            if (todo.complated){
                return;
            }
            angular.forEach($scope.$todos,function (todo) {
                todo.isEditing = false;
            });
            todo.isEditing = true;
            $scope.originalTitle = todo.title;
        }


        
        $scope.onEditKeyPass = function (e,todo) {
            console.log(e);
            switch (e.keyCode){
                case 13:
                    todo.isEditing = false;
                    break;
                case 27:
                    todo.title = $scope.originalTitle;
                    todo.isEditing = false;
                    break;
            }
        }
        
    })
    .controller('TodoFooter',function ($scope,$rootScope) {

        $scope.onShowDataClick = function (type) {
            $scope.$emit('ShowDataChange',type);
            /*
            * $emit 向上通知
            * $broadcast 向下广播
            * $on 监听事件
            * */

        }


        $scope.onClearCompletedClick = function () {

            $scope.$emit('clearComplated','clearComplated');
        };
    });