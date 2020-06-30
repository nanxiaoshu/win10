window.onload = function(){
    var mask = document.getElementsByClassName("mask")[0];
    var container = document.getElementById("container");
    var start_menu = document.getElementById("start_menu");
    var unfold_fold = document.getElementById("unfold_fold");
    var bottom_info  = document.getElementById("bottom_info");
    var back_desktop = document.getElementById("back_desktop");
    var bottom_volume = document.getElementById("bottom_volume");
    var volume_control = document.getElementById("volume_control");
    var start_menu_img = document.getElementById("start_menu_img");
    var chinese_english = document.getElementById("chinese_english");
    var power_management = document.getElementById("power_management");
    var network_expansion = document.getElementById("network_expansion");
    var bottom_volume_img = document.getElementById("bottom_volume_img");
    var brightness_control = document.getElementById("brightness_control");
    var bottom_electricity = document.getElementById("bottom_electricity");
    var volume_control_img = document.getElementById("volume_control_img");
    var volume_control_bar = document.getElementById("volume_control_bar");
    var calendar_expansion = document.getElementById("calendar_expansion");
    var bottom_input_method = document.getElementById("bottom_input_method");
    var volume_control_value = document.getElementById("volume_control_value");
    var bottom_network_status = document.getElementById("bottom_network_status");
    var input_method_expansion = document.getElementById("input_method_expansion");
    var calendar_item_ul = document.getElementsByClassName('calendar_item_ul')[0];
    var brightness_control_bar =  document.getElementById("brightness_control_bar");
    var calendar_expansion_hide = document.getElementById("calendar_expansion_hide");
    var brightness_control_value = document.getElementById("brightness_control_value");
    var calendar_expansion_footer = document.getElementById("calendar_expansion_footer");
    var volume_control_bar_cursor = document.getElementById("volume_control_bar_cursor");
    var network_expansion_items = document.getElementsByClassName("network_expansion_items")[0];
    var brightness_control_bar_cursor = document.getElementById("brightness_control_bar_cursor");
    var message_notification_expansion = document.getElementById("message_notification_expansion");
    var network_expansion_items_div = document.getElementsByClassName("network_expansion_items_div");
    var volume_control_bar_article_mask = document.getElementById("volume_control_bar_article_mask");
    var network_expansion_items_menu = document.getElementsByClassName("network_expansion_items_menu");
    var brightness_control_bar_article_mask = document.getElementById("brightness_control_bar_article_mask");
    var message_notification_expansion_options = document.getElementById("message_notification_expansion_options");
    var message_notification_expansion_options_container_ul = document.getElementById("message_notification_expansion_options_container_ul");
    message_notification_expansion.style.height = window.innerHeight - 40 + "px";
    message_notification_expansion.style.width =  0 + "px";
    bottom_network_status.title = "南小树的网络" + "\n" + "Internet访问";
    bottom_input_method.title = "中文(简体，中国)" + "\n" +"美式键盘键盘" +"\n\n" + "要切换输入法，请按" + "\n" +  "Windows键+空格键。";
    message_notification_expansion_options_container_ul.style.width = window.innerWidth * 0.25 + "px";
    //关闭默认右键菜单
    document.oncontextmenu = function() {
        return false;
    };
    //控制条方法
    function control_bar_function(control, control_bar, control_bar_article_mask, control_bar_cursor, def_left, control_value, is_move, def_num, def_mask){
        var mouse_X = event.clientX;
        var bar_width = parseInt(control_bar.offsetWidth) + def_left;
        var move_left =mouse_X - (window.innerWidth - control.offsetWidth);
        if(move_left <= def_left){
            if(is_move){
                control_value.style.left = -8 + "px";
            }
            control_bar_cursor.style.left = def_left + "px";
            control_bar_article_mask.style.width = 0 + "%";
            control_value.innerText = 0;
        }else if(move_left  >= bar_width){
            if(is_move){
                control_value.style.left = bar_width - 100 + "px";
            }
            control_bar_cursor.style.left = bar_width + "px";
            if(def_num == 0){
                control_bar_article_mask.style.width = parseInt(control_bar.offsetWidth) + "px";
            }else{
                control_bar_article_mask.style.width = def_num + "%";
            }
            control_value.innerText = 100;
        }else{
            if(is_move){
                control_value.style.left = move_left - 93 + "px";
            }
            control_bar_cursor.style.left = move_left + "px";
            control_value.innerText = parseInt((move_left - def_left)/(bar_width - def_left)*100);
            if(def_num == 0){
                control_bar_article_mask.style.width = (move_left - def_left)/(bar_width - def_left) * parseInt(control_bar.offsetWidth)  + "px";
            }else{
                control_bar_article_mask.style.width = def_num * (move_left - def_left)/(bar_width - def_left) + "%";
            }
			if(def_mask){
				def_mask.style.opacity = (1- (move_left - def_left)/(bar_width - def_left)) * 0.5;
			}
            
        }

    };

    //消息展开与折叠响应变化
    function unfold_fold_function(){
        for(var i = 0; i < message_notification_expansion_options_container_ul.children.length; i++){
            message_notification_expansion_options_container_ul.children[i].style.width = window.innerWidth * 0.25 * 0.23 + "px";
        }
    };
    unfold_fold_function();
    //亮度条
    var brightness_control_left = brightness_control_bar_cursor.offsetLeft;
    brightness_control.onmousedown = function(){
        brightness_control_value.style.display = "block";
        window.onmousemove = function(){
            mask.style.display = "block";
            control_bar_function(message_notification_expansion, brightness_control_bar, brightness_control_bar_article_mask, brightness_control_bar_cursor, brightness_control_left, brightness_control_value,true, 17,mask);
        }
        window.onmouseup = function(){
            mask.style.display = "none";
            brightness_control_value.style.display = "none";
            window.onmousemove = null;
        }
    }
    //音量条
    var volume_control_left = volume_control_bar_cursor.offsetLeft;
    volume_control.onmousedown = function(){
        window.onmousemove = function(){
            control_bar_function(volume_control, volume_control_bar, volume_control_bar_article_mask, volume_control_bar_cursor, volume_control_left, volume_control_value, false,0);
            if(volume_control_value.innerText ==  0){
                bottom_volume_img.src = "images/volume_control/1.png";
                volume_control_img.src = "images/volume_control/1.png";
                bottom_volume.title = "扬声器:静音";
            }else if(volume_control_value.innerText > 0 && volume_control_value.innerText < 34){
                bottom_volume_img.src = "images/volume_control/2.png";
                volume_control_img.src = "images/volume_control/2.png";
                bottom_volume.title = "扬声器:(" + volume_control_value.innerText + "%)";
            }else if(volume_control_value.innerText >= 34 && volume_control_value.innerText < 66){
                bottom_volume_img.src = "images/volume_control/3.png";
                volume_control_img.src = "images/volume_control/3.png";
                bottom_volume.title = "扬声器:(" + volume_control_value.innerText + "%)";
            }else{
                bottom_volume_img.src = "images/volume_control/4.png";
                volume_control_img.src = "images/volume_control/4.png";
                bottom_volume.title = "扬声器:(" + volume_control_value.innerText + "%)";
            }
        }
        window.onmouseup = function(){
            window.onmousemove = null;
        }
    }
    //输入法展开栏变化
    var input_method_expansion_lis = input_method_expansion.children[0].children;
    //输入法展开栏变化_移入移出动画
    function input_functino(){
        for(var i = 0; i < input_method_expansion_lis.length; i++){
            if(i == 3) continue;
            if(input_method_expansion_lis[i].style.background == ""){
                input_method_expansion_lis[i].onmouseover = function(){
                    if(this.style.background == ""){
                        this.style.background = "#373737";
                    }
                }
                input_method_expansion_lis[i].onmouseout = function(){
                    if(this.style.background != ""){
                        this.style.background = "";
                    }
                }
            }
        }
    }
    input_functino();
    //输入法展开栏选项添加点击事件
    for(var i = 0; i < input_method_expansion_lis.length; i++){
        if(i == 3) continue;
        if(i == 0){
            input_method_expansion_lis[i].onclick = function(){
                for(var j = 0; j < input_method_expansion_lis.length; j++){
                    if(j == 3) continue;
                    input_method_expansion_lis[j].style.background = "";
                    input_method_expansion_lis[j].onmouseover = null;
                    input_method_expansion_lis[j].onmouseout = null;

                }
                bottom_input_method.title = "中文(简体，中国)" + "\n" +"搜狗拼音输入法" +"\n\n" + "要切换输入法，请按" + "\n" +  "Windows键+空格键。";
                bottom_input_method.children[1].style.display = "none";
                bottom_input_method.children[2].style.display = "none";
                bottom_input_method.children[0].style.display = "block";
                chinese_english.style.display = "block";
                this.style.background = "#444444";
                input_functino();
                input_method_expansion.style.height = 0;
            }
        }else if(i == 1){
            input_method_expansion_lis[i].onclick = function(){
                for(var j = 0; j < input_method_expansion_lis.length; j++){
                    if(j == 3) continue;
                    input_method_expansion_lis[j].style.background = "";
                    input_method_expansion_lis[j].onmouseover = null;
                    input_method_expansion_lis[j].onmouseout = null;

                }
                bottom_input_method.title = "中文(简体，中国)" + "\n" +"微软拼音" +"\n\n" + "要切换输入法，请按" + "\n" +  "Windows键+空格键。";
                bottom_input_method.children[0].style.display = "none";
                bottom_input_method.children[2].style.display = "none";
                bottom_input_method.children[1].style.display = "inline";
                chinese_english.style.display = "block";

                this.style.background = "#444444";
                input_functino();
                input_method_expansion.style.height = 0;
            }
        }else if(i == 2){
            input_method_expansion_lis[i].onclick = function(){
                for(var j = 0; j < input_method_expansion_lis.length; j++){
                    if(j == 3) continue;
                    input_method_expansion_lis[j].style.background = "";
                    input_method_expansion_lis[j].onmouseover = null;
                    input_method_expansion_lis[j].onmouseout = null;

                }
                bottom_input_method.title = "中文(简体，中国)" + "\n" +"美式键盘键盘" +"\n\n" + "要切换输入法，请按" + "\n" +  "Windows键+空格键。";
                bottom_input_method.children[0].style.display = "none";
                bottom_input_method.children[1].style.display = "none";
                bottom_input_method.children[2].style.display = "inline";
                chinese_english.style.display = "none";
                this.style.background = "#444444";
                input_functino();
                input_method_expansion.style.height = 0;
            }
        }


    }
    // 网络状态展开栏单击事件
    var network_expansion_items_li = network_expansion_items.children[0].children;
    for(var i = 0; i < network_expansion_items_li.length; i++){
        if(i === 0){
            network_expansion_items_li[i].onclick = function(){
                for(var j = 0; j < network_expansion_items_li.length; j++){
                    if(j > 1){
                        network_expansion_items_li[j].style.height = 55 + "px";
                        network_expansion_items_li[j].style.background = null;
                    }
                }
                for(var i = 0; i < network_expansion_items_li.length;i++){
                    if(i > 1){
                        network_expansion_items_li[i].children[5].style.display = "none";
                    }
                }
            }
        }else if(i == 3){
            network_expansion_items_li[i].onclick = function(){
                for(var j = 0; j < network_expansion_items_li.length; j++){
                    if(j > 1){
                        network_expansion_items_li[j].style.height = 55 + "px";
                        network_expansion_items_li[j].style.background = null;
                    }
                }
                this.style.background = "#4D4D4D";
                this.style.height = 190 + "px";
                for(var i = 0; i < network_expansion_items_li.length;i++){
                    if(i > 1){
                        network_expansion_items_li[i].children[5].style.display = "none";
                    }
                }
            }
        }else if(i !== 1){
            network_expansion_items_li[i].onclick = function(){
                for(var j = 0; j < network_expansion_items_li.length; j++){
                    if(j > 1){
                        network_expansion_items_li[j].style.height = 55 + "px";
                        network_expansion_items_li[j].style.background = null;
                    }
                }
                this.style.background = "#4D4D4D";
                this.style.height = 150 + "px";
                for(var i = 0; i < network_expansion_items_li.length;i++){
                    if(i > 1){
                        network_expansion_items_li[i].children[5].style.display = "none";
                    }
                }
            }
        }

    }
    // 网络展开栏右击事件
    for(var i = 0; i < network_expansion_items_li.length; i++){
        if(i === 3){
            network_expansion_items_li[i].onmousedown = function(event){
                if(event.which == 3){
                    for(var j = 0; j < network_expansion_items_li.length; j++){
                        if(j > 1){
                            network_expansion_items_li[j].style.height = 55 + "px";
                            network_expansion_items_li[j].style.background = null;
                            network_expansion_items_li[j].children[5].style.display = "none";
                        }
                    }
                    this.style.background = "#4D4D4D";
                    this.style.height = 190 + "px";

                    this.children[5].style.display = "block";
                    this.children[5].style.top = event.clientY - network_expansion.offsetTop + "px";
                    this.children[5].style.left = event.clientX - network_expansion.offsetLeft  + "px";
                }
                return false;
            }
        }else if(i > 1 && i !== 3){
            network_expansion_items_li[i].onmousedown = function(event){
                if(event.which == 3){
                    for(var j = 0; j < network_expansion_items_li.length; j++){
                        if(j > 1){
                            network_expansion_items_li[j].style.height = 55 + "px";
                            network_expansion_items_li[j].style.background = null;
                            network_expansion_items_li[j].children[5].style.display = "none";
                        }
                    }
                    this.style.background = "#4D4D4D";
                    this.style.height = 150 + "px";

                    this.children[5].style.display = "block";
                    this.children[5].style.top = event.clientY - network_expansion.offsetTop + "px";
                    this.children[5].style.left = event.clientX - network_expansion.offsetLeft  + "px";

                }
                return false;
            }
        }
    }
    // 网络展开栏中自动连接事件
    for(var i = 0; i < network_expansion_items_div.length; i++){
        network_expansion_items_div[i].onclick = function(){
            if(this.children[0].innerText !== ""){
                this.children[0].innerText = "";
            }else{
                this.children[0].innerText = "√";
            }
        }
    }
    // 开始按钮变化
    start_menu.onmousemove = function(){
        start_menu_img.src="images/start_menu1.png";
    };
    start_menu.onmouseout = function(){
        start_menu_img.src="images/start_menu.png";
    };
    container.style.height = window.innerHeight + "px";
    //输入法中英文变换
    chinese_english.onclick = function(){
        if(chinese_english.innerText == "中"){
            chinese_english.innerText = "英";
        }else{
            chinese_english.innerText = "中";
        }
    }
    //浏览器窗口大小变化
    window.onresize = function(){
        message_notification_expansion.style.height = window.innerHeight - 39 + "px";
        if(message_notification_expansion.style.width != 0 + "px"){
            message_notification_expansion.style.width =  window.innerWidth * 0.25 + "px";
            message_notification_expansion_options_container_ul.style.width = window.innerWidth * 0.25 + "px";
            unfold_fold_function();
        }else{
            unfold_fold_function();
        }

    };

    //消息通知展开
    bottom_info.onclick = function(){
        if(message_notification_expansion.style.width == 0 + "px"){
            message_notification_expansion.style.width = window.innerWidth * 0.25 + "px";
            message_notification_expansion_options_container_ul.style.width = window.innerWidth * 0.25 + "px";
        }else{
            message_notification_expansion.style.width = 0 + "px";
        }
    };
    //回到桌面
    back_desktop.onclick  = function(){
        message_notification_expansion.style.width = 0 + "px";
        volume_control.style.height = 0 + "px";
        power_management.style.height = 0 + "px";
        input_method_expansion.style.height = 0 + "px";
        network_expansion.style.height = 0 + "px";
        calendar_expansion.style.display = "none";
    };
    //点击其他地方隐藏展开框
    document.body.onclick = function(e){
        var win_height = window.innerHeight;
        var win_width = window.innerWidth;
        var cursor_X = event.clientX;
        var cursor_Y = event.clientY;
        //消息展开栏
        var mes_width = parseInt(message_notification_expansion.style.width);
        var mes_height = parseInt(message_notification_expansion.style.height);
        if(cursor_X < (win_width - mes_width) || (cursor_Y > mes_height && mes_width != 0 && cursor_X < bottom_info.offsetLeft)){
            message_notification_expansion.style.width = 0 + "px";
        }
        //音量控制栏
        var vol_width = parseInt(volume_control.offsetWidth);
        var vol_height = parseInt(volume_control.offsetHeight);
        if(cursor_X < (win_width - vol_width) || cursor_Y < (win_height - vol_height - 40) || (cursor_X > (win_width - vol_width) && cursor_Y > (win_height - 40) && vol_height != 0)){
            volume_control.style.height = 0 + "px";
        }
        //电量管理
        var pow_width = parseInt(power_management.offsetWidth);
        var pow_height = parseInt(power_management.offsetHeight);
        if(cursor_X > (pow_width + power_management.offsetLeft) || cursor_X < (win_width - pow_width) || cursor_Y < (win_height - pow_height - 40) || (cursor_X > (win_width - pow_width) && cursor_Y > (win_height - 40) && pow_height != 0)){
            power_management.style.height = 0 + "px";
        }
        //输入法展开栏
        var inp_width = parseInt(input_method_expansion.offsetWidth);
        var inp_height = parseInt(input_method_expansion.offsetHeight);
        if(cursor_X < (win_width - inp_width) || cursor_Y < (win_height - inp_height - 40) || (cursor_X > (win_width - inp_width) && cursor_Y > (win_height - 40) && inp_height != 0)){
            input_method_expansion.style.height = 0 + "px";
        }
        //网络状态展开栏
        var net_width = parseInt(network_expansion.offsetWidth);
        var net_height = parseInt(network_expansion.offsetHeight);
        if(cursor_X < (win_width - net_width) || cursor_Y < (win_height - net_height - 40) || (cursor_X > (win_width - net_width) && cursor_Y > (win_height - 40) && net_height != 0)){
            network_expansion.style.height = 0 + "px";
        }
        //日历展开栏
        var cal_width = parseInt(calendar_expansion.offsetWidth);
        var cal_height = parseInt(calendar_expansion.offsetHeight);
        if((cursor_X < (win_width - cal_width) || cursor_Y < (win_height - cal_height - 40)) || (cursor_Y > (win_height - 40) && (cursor_X < bottom_date.offsetLeft) || (cursor_X > bottom_date.offsetLeft + bottom_date.offsetWidth && cursor_Y > win_height - 40 ))){
            calendar_expansion.style.display = "none";
        }
    };
    //消息栏展开折叠
    unfold_fold.onclick = function(){
        var options_height = parseInt(message_notification_expansion_options.style.height);
        if(options_height != 100){
            unfold_fold.innerText = "展开";
            message_notification_expansion_options.style.height = 100 + "px";
        }else{
            unfold_fold.innerText = "折叠";
            message_notification_expansion_options.style.height = 430 + "px";
        }

    };
    //音量调节展开
    bottom_volume.onclick = function(){
        if(volume_control.offsetHeight == 0){
            volume_control.style.height = 120 + "px";
        }else{
            volume_control.style.height = 0;
        }
    };
    //电量管理展开
    bottom_electricity.onclick = function(){
        if(power_management.offsetHeight == 0){
            power_management.style.height = 220 + "px";
        }else{
            power_management.style.height = 0;
        }
    }
    //输入法展开
    bottom_input_method.onclick = function(){
        if(input_method_expansion.offsetHeight == 0){
            input_method_expansion.style.height = 280 + "px";
        }else{
            input_method_expansion.style.height = 0;
        }
    }
    //网络状态栏展开
    bottom_network_status.onclick = function(){
        if(network_expansion.offsetHeight == 0){
            network_expansion.style.height = 650 + "px";
            for(var j = 0; j < network_expansion_items_li.length; j++){
                if(j > 1){
                    network_expansion_items_li[j].style.height = 55 + "px";
                    network_expansion_items_li[j].style.background = null;
                    network_expansion_items_li[j].children[5].style.display = "none";
                }
            }
        }else{
            network_expansion.style.height = 0;
        }
    }
    //日历展开
    bottom_date.onclick = function(e){
        if(calendar_expansion.style.display != "block"){
           calendar_expansion.style.display = "block";
        }else{
            calendar_expansion.style.display = "none";
        }
    }

    //日历中hide部分
    calendar_expansion_footer.onclick = function(e){
        if(calendar_expansion_hide.offsetHeight == 200){
            calendar_expansion_hide.style.height = 0 + "px";
            calendar_expansion_footer.children[0].innerText = "显示日程∧";
        }else{
            calendar_expansion_hide.style.height = 200 + "px";
            calendar_expansion_footer.children[0].innerText = "隐藏日程∨";
        }
        e.stopPropagation();
    }
    //日历中鼠标移动动画
    calendar_item_ul.onmousemove = function(e){
		var e = e || event;
		var x = e.clientX - calendar_expansion.offsetLeft - 70;
		var y = e.clientY - calendar_expansion.offsetTop - 265;
        calendar_item_ul.style["background-position"] = x + "px " + y + "px";
		e.preventDefault();
	}
}