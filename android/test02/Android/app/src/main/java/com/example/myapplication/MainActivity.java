package com.example.myapplication;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.drawee.view.SimpleDraweeView;
import com.squareup.picasso.Picasso;

import java.io.IOException;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class MainActivity extends AppCompatActivity implements  View.OnClickListener{
    TextView responsetTxt;
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
       sendHttp();
    }

    //new Thread自动导入
    private void sendHttp() {
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
                        responsetTxt.setText(res);
                    }
                });
            }
        }).start();
    }
}
