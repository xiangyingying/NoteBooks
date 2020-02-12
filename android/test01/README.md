### 一 项目结构

在android下

```
app/res/layout     //视图层
app/java/com.example.myapplaction/MainActivity     //逻辑控制层   activity活动
AndroidManifest.xml   //活动注册到此文件上中
```

```
//launcher  发射器
//category 包含了一个活动的附加的一些信息，是可以自定义的。它精确的指明了当前活动能够相应的Intent

<activity android:name=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
</activity>
```

### 二 布局

直接写<Button>会报错,要使用线性布局<LinearLayout>

```
<LinearLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent">
        <Button
            android:text="按钮"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content" />
    </LinearLayout>
```

```
//wrap_content 组件实际的大小
android:layout_width="wrap_content"
android:layout_height="wrap_content"
//match_parent 继承父组件的宽高
 android:layout_width="match_parent"
 android:layout_height="match_parent"
```

### 三 简单的点击事件

```
//activity_main.xml
<Button
            android:id="@+id/main_btn"
            android:layout_width="99dp"
            android:layout_height="58dp"
            android:text="你好" />
```

````
//MainActivity.java
protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button btn=(Button) findViewById(R.id.main_btn);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(MainActivity.this,"andorid",Toast.LENGTH_SHORT).show();
            }
        });
    }
````

### 四 Intent

Intent:是android程序进行用户交互的一种方式。它不仅可以指明当前组件想要执行的动作，还可以在不同的组件之间传递数据。

```
1.启动活动
2.启动服务
3.发送广播
```

1-1 打电话

```
//activity_main.xml
<Button
            android:id="@+id/main_btn"      //使用id
            android:layout_width="99dp"
            android:layout_height="58dp"
            android:text="打电话" />
```

```
//MainActivity.java
protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button btn=(Button) findViewById(R.id.main_btn);    //捕获id
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent=new Intent(Intent.ACTION_DIAL);
                intent.setData(Uri.parse("tel:18771078758"));
                startActivity(intent);
            }
        });
    }
```

1-2 开启一个网页

```
btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent=new Intent(Intent.ACTION_VIEW);
                intent.setData(Uri.parse("http://www.baidu.com"));
                startActivity(intent);
            }
        });
```

### 五 样式

```
<LinearLayout
        android:orientation="vertical"      //子文本的排列方式 horizontal:水平 vertical:垂直
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        tools:layout_editor_absoluteX="-143dp"
        tools:layout_editor_absoluteY="0dp">

        <Button
            android:layout_width="99dp"
            android:layout_height="58dp"
            android:text="hello world" />
         //给文本增加样式
        <TextView
            android:layout_width="wrap_content"       
            android:layout_height="wrap_content"
            android:text="hello world"
            android:textColor="#ff2d51"
            android:textSize="40dp"
            android:background="#3333"
            />

    </LinearLayout>
```

### 六 修改样式

#### 修改app的图标和名称

图片路径：app/src/main/res/drawable   

tips:使用png格式的图片，名称为英文

```
//AndroidManifest.xml  //修改图标
android:icon="@drawable/logo"       //修改图标
android:label="@string/app_name"  //选中@string/app_name ctrl+鼠标左键跳到strings.xml
```

```
//strings.xml     //修改名称
<resources>
    <string name="app_name">网易云音乐</string>
</resources>
```

#### 修改导航栏样式

```
//AndroidManifest.xml
android:theme="@style/AppTheme">     //ctrl+鼠标左键到styles.xml
//styles.xml
<item name="colorAccent">@color/colorAccent</item>   //ctrl+鼠标左键到colors.xml
//colors.xml
<resources>
    <color name="colorPrimary">#ff2d51</color>
    <color name="colorPrimaryDark">#C20C0C</color>
    <color name="colorAccent">#D81B60</color>
</resources>
```

### 七 加载图片

#### 本地图片

```
<ImageView   //只能加载本地图片
            android:src="@drawable/logo"
            android:layout_width="200dp"
            android:layout_height="200dp" />
```

#### 加载网络图片

https://www.fresco-cn.org/docs/getting-started.html

1.安装依赖

```
//Gradle Scripts/build.gradle
implementation 'com.facebook.fresco:fresco:2.0.0'
```

2.配置

```
//AndroidManifest.xml
<uses-permission android:name="android.permission.INTERNET" />
```

3.alt+enter  自动打包

```
//MainActivity.java
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);   
        Fresco.initialize(this);   //加入这句，引入报错  alt+enter  一定要配置在setContentView的前面
        setContentView(R.layout.activity_main);

    }

```

4.activity_main.xml加入

```

<LinearLayout>
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:fresco="http://schemas.android.com/apk/res-auto"
    ...
 </LinearLayout>
```

```
//加入SimpleDraweeView:
<com.facebook.drawee.view.SimpleDraweeView
    android:id="@+id/my_image_view"
    android:layout_width="130dp"
    android:layout_height="130dp"
    fresco:placeholderImage="@drawable/my_drawable"
  />
```

5.开始加载图片

```
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //alt+enter  自动打包
        Fresco.initialize(this);
        setContentView(R.layout.activity_main);
        Uri uri = Uri.parse("https://c- ssl.duitang.com/uploads/item/201802/11/20180211213249_pldeg.thumb.700_0.jpg");
        SimpleDraweeView draweeView = (SimpleDraweeView) findViewById(R.id.my_image_view);
        draweeView.setImageURI(uri);
    }
}
```

### Picasso

```
//1.安装依赖
implementation 'com.squareup.picasso:picasso:2.71828'
//2.使用
ImageView imageView = (ImageView) findViewById(R.id.ImageView);
Picasso.get().load("xxx").into(imageView);
```

```
<ImageView
    android:id="@+id/ImageView"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content" />
    </LinearLayout>

```

```
ImageView image=(ImageView) findViewById(R.id.ImageView);
        String url="https://c-ssl.duitang.com/uploads/item/201910/19/20191019184857_tokhd.thumb.400_0.jpg";
        Picasso.get().load("url").into(image);
```

### 菜单栏

新建菜单,名字为menu

![](E:\notebooks\android\test01\assets\创建菜单.png)

创建

res/menu/main.xml

```
<item
    android:id="@+id/sao"
    android:title="扫一扫"
    />
    <item
       android:title="添加"
        android:icon="@drawable/add"
        />
```

```
//MainAcivity.java
@Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.main,menu);
        return super.onCreateOptionsMenu(menu);
    }
```

弹出框  MainAcivity.java

```
@Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        switch (item.getItemId()){
            case R.id.sao:
                Toast.makeText(MainActivity.this,"扫一扫",Toast.LENGTH_SHORT).show();
                break;
            case R.id.add:
                Toast.makeText(MainActivity.this,"添加",Toast.LENGTH_SHORT).show();
        }
        return  true;
    }
```

### finish()

```
使用finish()可以销毁一个活动
```

### 打印日志

```

protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Fresco.initialize(this);
        setContentView(R.layout.activity_main);
        
        Button btn=(Button) findViewById(R.id.main_btn);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Log.d("main", "hello world");    //在logcat打印，相当于console.log
            }
        });
    }
```

### 页面跳转

```
@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Fresco.initialize(this);
        setContentView(R.layout.activity_main);
        Button btn=(Button) findViewById(R.id.main_btn);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
               Intent intent=new Intent(MainActivity.this,DetailActivity.class);
               startActivity(intent);
            }
        });
    }
```

跳转传值

```
//MainActivity
@Override
            public void onClick(View v) {
                String id="1001";
               Intent intent=new Intent(MainActivity.this,DetailActivity.class);
               intent.putExtra("id",id);
               startActivity(intent);
            }
```

```
//DetailActivity
@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detail);
        Intent intent=getIntent();
        String data=intent.getStringExtra("id");
        Log.d("id",data);
    }
```

### 线性布局

https://www.runoob.com/w3cnote/android-tutorial-linearlayout.html

```
//水平方向
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:tools="http://schemas.android.com/tools"
        android:id="@+id/LinearLayout1"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="horizontal">

        <LinearLayout
            android:layout_width="0dp"
            android:layout_height="fill_parent"
            android:background="#ADFF2F"
            android:layout_weight="1"/>


        <LinearLayout
            android:layout_width="0dp"
            android:layout_height="fill_parent"
            android:background="#DA70D6"
            android:layout_weight="2"/>

    </LinearLayout>
```

垂直方向

```

<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:tools="http://schemas.android.com/tools"
        android:id="@+id/LinearLayout1"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical">

        <LinearLayout
            android:layout_height="0dp"
            android:layout_width="match_parent"
            android:background="#ADFF2F"
            android:layout_weight="1"/>


        <LinearLayout
            android:layout_height="0dp"
            android:layout_width="match_parent"
            android:background="#DA70D6"
            android:layout_weight="2"/>

    </LinearLayout>
```

### GridLayout布局

```
<GridLayout
        android:layout_width="wrap_content"
        android:layout_height="300dp"
        tools:ignore="MissingConstraints"
        >
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
    </GridLayout>
```



