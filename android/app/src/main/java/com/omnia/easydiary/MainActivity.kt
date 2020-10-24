package com.omnia.easydiary

import android.graphics.Color
import android.os.Build
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebView
import com.omnia.easydiary.R
import easyview.EasyView

class MainActivity : AppCompatActivity() {
    private val easyView: EasyView = EasyView(this)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

//        WebView.setWebContentsDebuggingEnabled(true);

        if(!easyView.created) {
            easyView.view = findViewById(R.id.mainWindowView)
            easyView.url = "file:///android_asset/index.html"
            easyView.enableInternalStorageApi = true
        }
        easyView.onCreate(savedInstanceState)

        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M) {
            window.statusBarColor = Color.BLACK
        }
    }
}