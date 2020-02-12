package com.example.testhttp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
/*import android.util.Log;*/
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

/*import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import java.io.IOException;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;*/

public class MainActivity extends AppCompatActivity implements  View.OnClickListener{
   /* TextView responsetTxt;*/
    //活动第一创建的时候会调用
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button btn =(Button) findViewById(R.id.send_http);
        /*responsetTxt=(TextView) findViewById(R.id.response_txt);
        btn.setOnClickListener(this);*/
        Log.d("main", "onCreate");
        btn.setOnClickListener(this);
    }


    @Override
    public void onClick(View v) {
        /*//alt+enter
        sendHttp();*/
        Intent intent=new Intent(MainActivity.this,DetailActivity.class);
        startActivity(intent);
    }

    //活动由不可见到可见的时候会触发
    @Override
    protected void onStart() {
        super.onStart();
        Log.d("main", "onStart ");
    }

    //活动处于栈的顶部就会触发
    @Override
    protected void onResume() {
        super.onResume();
        Log.d("main", "onResume ");
    }
   //活动处于暂停状态时触发
    @Override
    protected void onPause() {
        super.onPause();
        Log.d("main", "onPause");
    }
   //活动由可见到不可见的时候触发
    @Override
    protected void onStop() {
        super.onStop();
        Log.d("main", "onStop");
    }
    //活动被销毁的时候触发
    @Override
    protected void onDestroy() {
        super.onDestroy();
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.d("main", "onRestart");
    }
    //new Thread自动导入
   /* private void sendHttp() {
        new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    OkHttpClient client=new OkHttpClient();
                    Request request = new Request.Builder().url("https://music.aityp.com/").build();
                    Response response=client.newCall(request).execute();
                    String responseData=response.body().string();
                    showResponse(responseData);
                    Log.d("http",responseData);
                }catch (IOException e){
                    e.printStackTrace();
                }
            }
            //showResponse ALT+ENTER
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
    }*/
}
