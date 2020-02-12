package com.example.testhttp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
//javabena  实体类
public class AppData{
    private String msg;
    private int code;

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
}

