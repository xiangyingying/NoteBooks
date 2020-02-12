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



解析JSON

```
1.安装依赖
implementation("com.squareup.okhttp3:okhttp:4.3.0")
```

```ts
public class AppData{           
    private String msg;
    private int code;             //鼠标右键，选择Generate,进行选择

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

```

```ts
3.解析
private void showResponse(final String res) {
                //android不允许在子线程中操作ui，可以通过runOnUiThread方法，切回主线程去操作ui
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        JSONObject obj=JSON.parseObject(res);
                        AppData data=JSON.toJavaObject(obj,AppData.class);
                        responsetTxt.setText(res);
                    }
                });
            }
        }).start();
```

```
1.开启子线程发送http
2.在Ui线程中获取数据
3.使用fastjson对数据进行解析
4.创建实体类和接收数据映射
5.获取数据
```

### 生命周期 

````
onCreate()        //活动第一创建的时候会调用
onStart()         //活动由不可见到可见的时候会触发
onResume()        //活动处于栈的顶部就会触发
onPause()         //活动处于暂停状态时触发
onStop()          //活动由可见到不可见的时候触发
onDestroy()       //活动被销毁的时候触发
onRestart()       //活动由暂停变为运行状态的时候被触发
````

```
//活动初次加载的时候会触发以下三个周期
onCreate()
onStart()
onResume()
```

```
//A页面跳转到B页面的时候触发周期
onPause()
onStop()
```

```
//B页面跳转回A页面的时候触发周期
onStart()
onResume()
onRestart()
```

```
//生命周期函数的映射
onCreate()    onDestory()     完整生存期
onStart()     onStop()        可见生成期
onResume()    onPause()       前台生成期
```

