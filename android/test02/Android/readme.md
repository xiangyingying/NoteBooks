

### 项目结构

```
app-res-layout    activity_main.xml   //视图层
app-java   MainActivity.java          //逻辑控制层  activity活动    vue-组件
AndroidManifest.xml      //将活动注册在这个文件中
```

#### 1.新建组件

app/java/com.example.myapplication/右击New/Activity/Empty Activity,填写Activity Name名字

![1578014103227](C:\Users\WANGSI~1\AppData\Local\Temp\1578014103227.png)



![1578014136599](C:\Users\WANGSI~1\AppData\Local\Temp\1578014136599.png)

```js
//manifests/AndroidManifest.xml
<activity android:name=".MainActivity">
         //如果要作为启动页   以下几行必须要加
            <intent-filter>      
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
</activity>
//category包含了一个活动的附加的一些信息，是可以自定义的。它精确了指明了当前活动能够响应的Intent
```

### 布局

```js
<LinearLayout
         android:orientation="vertical"
         android:layout_width="match_parent"
         android:layout_height="match_parent">
         <Button
             android:text="按钮"
             android:layout_width="wrap_content"
             android:layout_height="wrap_content" />
     </LinearLayout>
```

```js
android:layout_width     //定义width
android:layout_height    //定义height
math_parent             //继承父组件的width、height
wrap_content           //组件实际的大小
```

### 简单的点击事件

```js
//1.main_activity
 <Button
            android:id="@+id/main_btn"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="按钮" />
```

```js
//2.MainActivity
 Button btn=(Button) findViewById(R.id.main_btn);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
               Toast.makeText(MainActivity.this,"android牛逼",Toast.LENGTH_SHORT).show();
            }
        });
```

### Intent

> intent:是Android程序进行用户交互的一种方式。它不仅可以指明当前组件想要执行的动作，还可以在不同的组件之间传递数据。

```
1.启动活动
2.启动服务
3.发送广播
```

#### 1-1打...电话

```js
//MainActivity
public void onClick(View v) {
               Intent intent=new Intent(Intent.ACTION_DIAL);
               intent.setData(Uri.parse("tel:10086"));
               startActivity(intent);
            }
```

#### 1-2开启一个网页

```js
 public void onClick(View v) {
               Intent intent=new Intent(Intent.ACTION_VIEW);
               intent.setData(Uri.parse("https://www.baidu.com"));
               startActivity(intent);
            }
```

### 修改app的图标和名称

```
将本地图片放在res/drawable下面，必须是png格式的，而且不能是中文
```

![1578035549612](C:\Users\WANGSI~1\AppData\Local\Temp\1578035549612.png)

点击android:label=“@string/app_name"按住ctrl+鼠标左键跳转到相应的页面修改名字

### 修改主题色

点击进入values/colors.xml页面

![1578038080197](C:\Users\WANGSI~1\AppData\Local\Temp\1578038080197.png)

### 控件

```js
 //ImageView   只能加载本地图片
<ImageView
            android:src="@drawable/logo"
            android:layout_width="200dp"
            android:layout_height="200dp" />
```

### Freso加载网络图片

```js
//1.安装依赖   build.gradle
dependencies {
    implementation 'com.facebook.fresco:fresco:2.0.0'
    ...
}
```

```js
//2.添加权限配置   AndroidManifest.xml
 <uses-permission android:name="android.permission.INTERNET" />   //允许进行网络请求
```

```js
//3.MainActivity  一定要配置在setContentView前面
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //alt+enter自动导入包
        Fresco.initialize(this);        //添加这一行会报错点击alt+enter,
        setContentView(R.layout.activity_main);
    }
}
```

```js
//4.在xml布局文件中, 加入命名空间：
<LinearLayout
        xmlns:android="http://schemas.android.com/apk/res/android"    //这两行
        xmlns:fresco="http://schemas.android.com/apk/res-auto"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        >
```

```js
//5.加入SimpleDraweeView:     //替换掉ImageView模块
<com.facebook.drawee.view.SimpleDraweeView
    android:id="@+id/my_image_view"
    android:layout_width="130dp"
    android:layout_height="130dp"
    fresco:placeholderImage="@drawable/my_drawable"
  />
```

```js
//6.开始加载图片    
  Uri uri = Uri.parse("https://raw.githubusercontent.com/facebook/fresco/gh-     pages/static/logo.png");
        SimpleDraweeView draweeView = (SimpleDraweeView) findViewById(R.id.my_image_view);
        draweeView.setImageURI(uri);


// MainActivity
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
       ...
        //导入以下几行
        Uri uri = Uri.parse("https://raw.githubusercontent.com/facebook/fresco/gh-pages/static/logo.png");
        SimpleDraweeView draweeView = (SimpleDraweeView) findViewById(R.id.my_image_view);
        draweeView.setImageURI(uri);
    }
}
```

```
alt+enter自动导包
```

### Picasso

```js
//1.安装依赖
implementation 'com.squareup.picasso:picasso:2.71828'
```

```js
//2.使用
ImageView imageView = (ImageView) findViewById(R.id.ImageView);
Picasso.get().load("xxx").into(imageView);
```

### 添加Menu

#### 1.右击res/New/Android Resource Directory,Resource type选择menu,点击ok

#### 2.新建menu文件之后 右击New/Menu resource file,file name:main

```js
//menu/main.xml
<item
    android:icon="@drawable/sao"     //图标
    android:id="@+id/sao"
    android:title="扫一扫"
    />
    <item
        android:icon="@drawable/add"
        android:id="@+id/add"
        android:title="添加朋友"
        />
```

```js
//MainActivity设置
//onCreate自动生成
@Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.main,menu);
        return super.onCreateOptionsMenu(menu);
    }
```

```js
//MainActivity
//给Menu下的Item设置事件
    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        switch (item.getItemId()){
            case R.id.sao:
                Toast.makeText(MainActivity.this,"扫一扫",Toast.LENGTH_SHORT).show();
                break;
            case R.id.add:
                Toast.makeText(MainActivity.this,"添加朋友",Toast.LENGTH_SHORT).show();
                default:
        }
        return true;
    }
```

### finish()

```js
使用finish()方法可以销毁一个活动
//MainActivity
@Override
    protected void onCreate(Bundle savedInstanceState) {
        ...
        image.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
    }
```

### 打印日志信息

```js
//layout/activity_main.xml
<LinearLayout
        android:orientation="vertical"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        >
        <Button
            android:id="@+id/mian_btn"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:text="跳转到detail"
            />
    </LinearLayout>
```



```js
//MainActivity    Layout中查看
@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button btn=(Button) findViewById(R.id.mian_btn);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Log.d("main","hello world");
            }
        });
    }
```

### 跳转

```js
//layout/activity_main.xml
<LinearLayout
        android:orientation="vertical"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        >
        <Button
            android:id="@+id/mian_btn"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:text="跳转到detail"
            />
    </LinearLayout>
```

```js
//MainActivity.java
 @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button btn=(Button) findViewById(R.id.mian_btn);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
            //Intent()参数：第一个是当前页面，第二个是要跳转的页面
               Intent intent=new Intent(MainActivity.this,DetailActivity.class);
               startActivity(intent);
            }
        });
    }
```

### 跳转传值

```js
//layout/activity_main.xml
<LinearLayout
        android:orientation="vertical"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        >
        <Button
            android:id="@+id/mian_btn"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:text="跳转到detail"
            />
    </LinearLayout>
```



```js
//上一个页面配置  putExtra     MainActivity
 @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button btn=(Button) findViewById(R.id.mian_btn);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String id="1001";
             //Intent()参数：第一个是当前页面，第二个是要跳转的页面
               Intent intent=new Intent(MainActivity.this,DetailActivity.class);
               intent.putExtra("id",id);
               startActivity(intent);
            }
        });
    }
```

```js
//跳转页面接收传值   getStringExtra    DetailActivity
public class DetailActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detail);
        Intent intent=getIntent();
        String data=intent.getStringExtra("id");
        Log.d("id",data);
    }
}
```

### 线性布局

```js
//线性布局中可以嵌套，一行2个
<LinearLayout
        android:background="#333"
        android:orientation="horizontal"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        >
       <LinearLayout
           android:background="#333"
           android:layout_weight="1"
           android:layout_width="0dp"
           android:layout_height="match_parent"></LinearLayout>
        <LinearLayout
            android:background="#fff"
            android:layout_weight="1"
            android:layout_width="0dp"
            android:layout_height="match_parent"></LinearLayout>
    </LinearLayout>
```

### GridLayout

```js
//三行四列
<GridLayout
        android:columnCount="4"
        android:rowCount="3"
        android:layout_width="match_parent"
        android:layout_height="300dp"
        tools:context="MissingConstraints"
        >
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
    </GridLayout>
```

如果标签下边报红，在标签里面添加以下代码

```js
tools:ignore="MissingConstraints"
```



