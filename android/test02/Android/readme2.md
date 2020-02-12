```
进程：在计算机上运行的一个应用程序就是一个进程。
```

```
线程：线程是进程的基本单位。一个进程由一个或者多个线程组成。线程和线程之间是独立的。
```

```js
进程和线程在使用内存的区别:
1.操作系统会给进程分配独立的内存空间
2.多个线程共享内存空间
```

### 给多个按钮设置点击事件

```js
//activity_main
<LinearLayout
       android:layout_width="match_parent"
       android:layout_height="match_parent"
       android:orientation="vertical">
       <Button
           android:text="发送http"
           android:id="@+id/send_http"
           android:layout_width="match_parent"
           android:layout_height="wrap_content" />
       <Button
           android:text="Btn2"
           android:id="@+id/btn2"
           android:layout_width="match_parent"
           android:layout_height="wrap_content" />
       <TextView
           android:id="@+id/response_txt"
           android:layout_width="match_parent"
           android:layout_height="wrap_content" />
   </LinearLayout>
```

```js
//MainActivity
public class MainActivity extends AppCompatActivity implements  View.OnClickListener{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button btn =(Button) findViewById(R.id.send_http);
        Button btn2=(Button) findViewById(R.id.btn2);
        btn.setOnClickListener(this);
        btn2.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()){
            case R.id.send_http:
                Log.d("main","send_http");
                break;
            case R.id.btn2:
                Log.d("main","btn2");
                break;
        }
    }
}
```

### 如果要读取网络资源必须要在manifests/AndroidManifest中加一段

```js
//授权   加在application上面
<uses-permission android:name="android.permission.INTERNET" />  
```

### 发送请求

```js
//1.安装依赖  build.gradle
implementation("com.squareup.okhttp3:okhttp:4.3.0")     //点击右上角，导入进去
```

### setText改变文本

```js
//setText()   MainActivity
public class MainActivity extends AppCompatActivity implements  View.OnClickListener{
    TextView responsetTxt;      //变量定义到最顶部，全局变量
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button btn =(Button) findViewById(R.id.send_http);
        responsetTxt=(TextView) findViewById(R.id.response_txt);
        btn.setOnClickListener(this);
    }
    
     @Override
    public void onClick(View v) {
        //alt+enter
        responsetTxt.setText("hello world");
        sendHttp();
    }
}
```



### 