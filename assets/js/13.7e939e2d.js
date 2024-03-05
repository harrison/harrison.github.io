(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{372:function(s,a,t){"use strict";t.r(a);var e=t(44),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#image"}},[s._v("#")]),s._v(" Image")]),s._v(" "),t("h2",{attrs:{id:"centos安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos安装docker"}},[s._v("#")]),s._v(" CentOS安装docker")]),s._v(" "),t("ol",[t("li",[s._v("卸载本地已有docker")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum remove docker "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    docker-client "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    docker-client-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    docker-common "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    docker-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    docker-latest-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    docker-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    docker-engine\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("安装yum-utils包，并设置稳定的仓库")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manager "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --add-repo "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    https://download.docker.com/linux/centos/docker-ce.repo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("安装最新版本的docker")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce docker-ce-cli containerd.io\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("启动docker")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start docker\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("运行hello world")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker run hello-world\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"什么是image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是image"}},[s._v("#")]),s._v(" 什么是Image")]),s._v(" "),t("ol",[t("li",[s._v("文件（root filesystem）和meta data的集合")]),s._v(" "),t("li",[s._v("分层的，并且每一层都可以添加改变和删除文件，成为一个新的Image")]),s._v(" "),t("li",[s._v("不同的Image可以共享相同的layer")]),s._v(" "),t("li",[s._v("Image本身是read-only的")]),s._v(" "),t("li",[s._v("Image只包含rootfs")])]),s._v(" "),t("h2",{attrs:{id:"获取image的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取image的方法"}},[s._v("#")]),s._v(" 获取Image的方法")]),s._v(" "),t("ol",[t("li",[s._v("Build from Dockerfile（从Dockerfile构建）")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选择一个Base Image")]),s._v("\nFROM ubuntu:14.04\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 基本标识 例如作者邮箱")]),s._v("\nLABEL "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("maintainer")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxx <xxxx@xxxx.com>"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在Base Image上运行命令")]),s._v("\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y redis-server\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暴露端口")]),s._v("\nEXPOSE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 程序入口")]),s._v("\nENTRYPOINT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/bin/redis-server"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行Dockerfile  -t 指定Image名字 .从当前目录的Dockerfile构建")]),s._v("\ndocker build -t xxxx/redis:latest "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("Pull from Registry（从远程仓库拉取）")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker pull ubuntu:14.04\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Image可以从docker Hub找到")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 有两种形式，一种official(官方版)，可以直接使用docker pull <ImageName>拉取")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 另一种显示为xxx/xxx，前面是镜像拥有者的名称，后面是镜像名称，可以使用docker pull xxx/xxx拉取")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h1",{attrs:{id:"dockerfile语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile语法"}},[s._v("#")]),s._v(" Dockerfile语法")]),s._v(" "),t("h2",{attrs:{id:"from"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[s._v("#")]),s._v(" FROM")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("FROM scratch "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 制作base image")]),s._v("\nFROM centos  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用base image")]),s._v("\nFROM ubuntu:14.04\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定base image 基础镜像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scratch 表示从头制作一个base image")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 尽量使用官方的base image")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"label"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#label"}},[s._v("#")]),s._v(" LABEL")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("LABEL "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("maintainer")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vanalso@outlook.com"')]),s._v("\nLABEL "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),s._v("\nLABEL "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"This is description"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于定义Metadata")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如作者，版本，描述")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不可少")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[s._v("#")]),s._v(" RUN")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("RUN yum update "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    python-dev  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 反斜线换行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行命令并创建新的Image Layer")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意：对于image来讲，每执行一次RUN就会生成一个新的Layer（层），为了避免生成无用层，建议多条命令合并为一条命令")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"wordkdir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wordkdir"}},[s._v("#")]),s._v(" WORDKDIR")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("WORKDIR /root\n\nWORKDIR /test   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果没有会自动创建目录")]),s._v("\nWORKDIR demo\nRUN "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出结果应该是/test/demo")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设定当前工作目录（类似cd改变目录）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用WORKDIR，不要用RUN cd")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 尽量使用绝对目录")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"add-and-copy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-and-copy"}},[s._v("#")]),s._v(" ADD and COPY")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ADD hello /\n\nADD test.tar.gz /       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加到根目录并解压")]),s._v("\n\nWORKDIR /root\nADD hello test/         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /root/test/hello")]),s._v("\n\nWORKDIR /root\nCOPY hello test/\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ADD 和 COPY 功能类似，添加本地文件到image内部")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 区别是 ADD 具有解压缩功能")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 大部分情况，COPY 优于 ADD")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如需添加远程文件，使用 RUN curl 或 RUN wget")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h2",{attrs:{id:"env"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[s._v("#")]),s._v(" ENV")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ENV MYSQL_VERSION "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.6")]),s._v("                       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置常量")]),s._v("\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y mysql-server"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MYSQL_VERSION}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/lib/apt/lists/*         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 引用常量")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用来设置常量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 尽量使用ENV，增加可维护性")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h1",{attrs:{id:"技巧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#技巧"}},[s._v("#")]),s._v(" 技巧")]),s._v(" "),t("h2",{attrs:{id:"免sudo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#免sudo"}},[s._v("#")]),s._v(" 免sudo")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 添加docker组（一般情况下已存在）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" docker\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 当前用户加进docker组")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gpasswd -a 用户名 docker\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. 重启docker")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" docker restart\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4. 重新登陆shell")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h1",{attrs:{id:"相关命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关命令"}},[s._v("#")]),s._v(" 相关命令")]),s._v(" "),t("h2",{attrs:{id:"查看本地image列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看本地image列表"}},[s._v("#")]),s._v(" 查看本地image列表")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker image "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);