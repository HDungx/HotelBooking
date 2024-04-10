const app = angular.module("user-app", [])
app.controller("user-ctrl", function($scope, $http) {
	$scope.users = [];
	$scope.form={};

	$scope.initialize = function() {
		$http.get("/rest/users").then(resp => {
			$scope.users = resp.data;
		});
	}

	//Khoi dau
	$scope.initialize();
	
	$scope.findUser=function(find){
		$http.get(`/rest/users/${find}`).then(resp=>{
			$scope.users=resp.data;
		})
	}
	
	
	$scope.edit = function(user) {
		$scope.form = angular.copy(user);
		$(".nav-tabs a:eq(0)").tab('show')

	}
	
	$scope.reset=function(){
		$scope.form=[];
	}
	
	$scope.create=function(){
		var user= angular.copy($scope.form);
		$http.post(`/rest/users`, user).then(resp => {
			$scope.users.push(resp.data);
			$scope.reset
			alert("Thêm thành công!")
		}).catch(error => {
			alert("Lỗi thêm mới")
			console.log("Error", error);
		})
	}
	$scope.delete = function(user) {
		$http.delete(`/rest/users/${user.email}`).then(resp => {
			var index = $scope.users.findIndex(p => p.email == user.email);
			$scope.users.splice(index, 1);
			$scope.reset();
			alert("Xóa thành công!")
		}).catch(error => {
			alert("Lỗi xóa")
			console.log("Error", error);
		})
	}
	
	
	$scope.pager={
		page:0,
		size:5,
		get users(){
			var start = this.page * this.size;
			return $scope.users.slice(start,start + this.size);
		},
		get count(){
			return Math.ceil(1.0*$scope.users.length/this.size);
		},
		first(){
			this.page=0;
		},
		previous(){
			this.page--;
			if(this.page<0){
				this.last();
			}
		},
		next(){
			this.page++;
			if(this.page>=this.count){
				this.first();
			}
		},
		last(){
			this.page  = this.count-1;
		}
		
	}
	
});