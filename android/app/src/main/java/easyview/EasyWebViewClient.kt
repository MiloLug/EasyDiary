package easyview

import android.annotation.TargetApi
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import android.webkit.WebViewClient


class EasyWebViewClient : WebViewClient() {
    override fun shouldInterceptRequest(
        view: WebView?,
        request: WebResourceRequest
    ): WebResourceResponse? {
        return if (request.method.equals("OPTIONS", ignoreCase = true)) {
            OptionsAllowResponse.build()
        } else null
    }
}