const app = angular.module("hotel-app", []);
app.controller("hotel-ctrl", function($scope, $http) {
	$scope.hotels = [];
	$scope.form = {};
	$scope.cities = [
		{"id":"An Giang","name":"An Giang"},
		{"id":"Vũng Tàu","name":"Vũng Tàu"},
		{"id":"Bạc Liêu","name":"Bạc Liêu"},
		{"id":"Bắc Kạn","name":"Bắc Kạn"},
		{"id":"Bắc Giang","name":"Bắc Giang"},
		{ "id": "Bắc Ninh", "name": "Bắc Ninh" },
		{ "id": "Bến Tre", "name": "Bến Tre" },
		{ "id": "Bình Dương", "name": "Bình Dương" },
		{ "id": "Bình Định", "name": "Bình Định" },
		{ "id": "Bình Phước", "name": "Bình Phước" },
		{ "id": "Bình Thuận", "name": "Bình Thuận" },
		{ "id": "Cà Mau", "name": "Cà Mau" },
		{ "id": "Cao Bằng", "name": "Cao Bằng" },
		{ "id": "Đắk Lắk", "name": "Đắk Lắk" },
		{ "id": "Đắk Nông", "name": "Đắk Nông" },
		{ "id": "Điện Biên", "name": "Điện Biên" },
		{ "id": "Đồng Nai", "name": "Đồng Nai" },
		{ "id": "Đồng Tháp", "name": "Đồng Tháp" },
		{ "id": "Gia Lai", "name": "Gia Lai" },
		{ "id": "Hà Giang", "name": "Hà Giang" },
		{ "id": "Hà Nam", "name": "Hà Nam" },
		{ "id": "Hà Tĩnh", "name": "Hà Tĩnh" },
		{ "id": "Hải Dương", "name": "Hải Dương" },
		{ "id": "Hậu Giang", "name": "Hậu Giang" },
		{ "id": "Hòa Bình", "name": "Hòa Bình" },
		{ "id": "Hưng Yên", "name": "Hưng Yên" },
		{ "id": "Khánh Hòa", "name": "Khánh Hòa" },
		{ "id": "Kiên Giang", "name": "Kiên Giang" },
		{ "id": "Kon Tum", "name": "Kon Tum" },
		{ "id": "Lai Châu", "name": "Lai Châu" },
		{ "id": "Đà Lạt", "name": "Đà Lạt" },
		{ "id": "Lạng Sơn", "name": "Lạng Sơn" },
		{ "id": "Lào Cai", "name": "Lào Cai" },
		{ "id": "Long An", "name": "Long An" },
		{ "id": "Nam Định", "name": "Nam Định" },
		{ "id": "Nghệ An", "name": "Nghệ An" },
		{ "id": "Ninh Bình", "name": "Ninh Bình" },
		{ "id": "Ninh Thuận", "name": "Ninh Thuận" },
		{ "id": "Phú Thọ", "name": "Phú Thọ" },
		{ "id": "Phú Yên", "name": "Phú Yên" },
		{ "id": "Quảng Bình", "name": "Quảng Bình" },
		{ "id": "Quảng Nam", "name": "Quảng Nam" },
		{ "id": "Quảng Ngãi", "name": "Quảng Ngãi" },
		{ "id": "Quảng Ninh", "name": "Quảng Ninh" },
		{ "id": "Quảng Trị", "name": "Quảng Trị" },
		{ "id": "Sóc Trăng", "name": "Sóc Trăng" },
		{ "id": "Sơn La", "name": "Sơn La" },
		{ "id": "Tây Ninh", "name": "Tây Ninh" },
		{ "id": "Thái Bình", "name": "Thái Bình" },
		{ "id": "Thái Nguyên", "name": "Thái Nguyên" },
		{ "id": "Thanh Hóa", "name": "Thanh Hóa" },
		{ "id": "Huế", "name": "Huế" },
		{ "id": "Tiền Giang", "name": "Tiền Giang" },
		{ "id": "Trà Vinh", "name": "Trà Vinh" },
		{ "id": "Tuyên Quang", "name": "Tuyên Quang" },
		{ "id": "Vĩnh Long", "name": "Vĩnh Long" },
		{ "id": "Vĩnh Phúc", "name": "Vĩnh Phúc" },
		{ "id": "Yên Bái", "name": "Yên Bái" },
		{ "id": "Cần Thơ", "name": "Cần Thơ" },
		{ "id": "Đà Nẵng", "name": "Đà Nẵng" },
		{ "id": "Hải Phòng", "name": "Hải Phòng" },
		{ "id": "Hà Nội", "name": "Hà Nội" },
		{ "id": "Phú Quốc", "name": "Phú Quốc" },
		{ "id": "Nha Trang", "name": "Nha Trang" },
		{ "id": "Phan Thiết", "name": "Phan Thiết" },
		{ "id": "Hạ Long", "name": "Hạ Long" },
		{ "id": "TP. Hồ Chí Minh", "name": "TP. Hồ Chí Minh" }
	];


	$scope.initialize = function() {
		$http.get("/rest/hotels").then(resp => {
			$scope.hotels = resp.data;
		});
	}

	//Khoi dau
	$scope.initialize();

	$scope.findHT = function(find) {
		$http.get(`/rest/hotels/${find}`).then(resp => {
			$scope.hotels = resp.data;
		})
	}


	$scope.edit = function(hotel) {
		$scope.form = angular.copy(hotel);
		$(".nav-tabs a:eq(0)").tab('show')

	}

	$scope.reset = function() {
		$scope.form = [];
	}

	$scope.create = function() {
		var hotel = angular.copy($scope.form);
		$http.post(`/rest/hotels`, hotel).then(resp => {
			$scope.hotels.push(resp.data);
			$scope.reset
			alert("Thêm thành công!")
		}).catch(error => {
			alert("Lỗi thêm mới")
			console.log("Error", error);
		})
	}
	$scope.delete = function(hotel) {
		$http.delete(`/rest/hotels/${hotel.hotelid}`).then(resp => {
			var index = $scope.hotels.findIndex(p => p.hotelid == hotel.hotelid);
			$scope.hotels.splice(index, 1);
			$scope.reset();
			alert("Xóa thành công!")
		}).catch(error => {
			alert("Lỗi xóa")
			console.log("Error", error);
		})
	}


	$scope.pager = {
		page: 0,
		size: 5,
		get hotels() {
			var start = this.page * this.size;
			return $scope.hotels.slice(start, start + this.size);
		},
		get count() {
			return Math.ceil(1.0 * $scope.hotels.length / this.size);
		},
		first() {
			this.page = 0;
		},
		previous() {
			this.page--;
			if (this.page < 0) {
				this.last();
			}
		},
		next() {
			this.page++;
			if (this.page >= this.count) {
				this.first();
			}
		},
		last() {
			this.page = this.count - 1;
		}

	}

});