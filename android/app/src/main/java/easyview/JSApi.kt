package easyview

import android.webkit.WebView
import easyview.EasyView

open class JSApi(var view: EasyView) {
    fun run(str: String){
        view.view?.post(Runnable {
            view.view?.loadUrl("javascript:$str")
        })
    }
    fun runFunction(fnName: String, vararg args: Any?){
        var strArgs = ""
        for(arg in args){
            strArgs += when(arg){
                is String -> "`$arg`"
                else -> arg.toString()
            } + ","
        }
        strArgs = strArgs.trimEnd(',')

        view.view?.post(Runnable {
            view.view?.loadUrl("javascript:$fnName($strArgs)")
        })
    }
}