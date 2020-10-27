package easyview

import android.annotation.SuppressLint
import android.content.Context
import android.os.Build
import android.os.Bundle
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebView
import com.google.gson.Gson
import com.google.gson.GsonBuilder
import java.io.*


class EasyView(val context: Context) {
    private val gson:Gson = GsonBuilder().setPrettyPrinting().create()

    var created: Boolean = false
        private set

    var url: String = ""
        set(url: String){
            if(!created)
                field = url
        }

    var view: WebView? = null
        set(view: WebView?){
            if(!created)
                field = view
        }

    var api: HashMap<String, JSApi> = HashMap<String, JSApi>()
        private set

    fun addApi(name: String, obj: JSApi){
        if(!created)
            this.api[name] = obj
    }
    fun removeApi(name: String){
        if(!created)
            this.api.remove(name)
    }


    val internalStorageJSApi = object: JSApi(this) {
        @JavascriptInterface
        fun exists(path: String): Boolean{
            val file: File = context.getFileStreamPath(path)
            return file.exists()
        }
        @JavascriptInterface
        fun write(path: String, data: String): String{
            var file: File = context.getFileStreamPath(path)
            if(!file.exists()){
                file.createNewFile()
            }
            val fileOutputStream: FileOutputStream
            try {
                fileOutputStream = FileOutputStream(file)
                fileOutputStream.write(data.toByteArray())
                return gson.toJson(HashMap<String, Any>().also {
                    it["ok"] = true
                })
            } catch (e: FileNotFoundException){
                return gson.toJson(HashMap<String, Any>().also {
                    it["ok"] = false
                    it["error"] = "FileNotFoundException"
                })
            }catch (e: NumberFormatException){
                return gson.toJson(HashMap<String, Any>().also {
                    it["ok"] = false
                    it["error"] = "NumberFormatException"
                })
            }catch (e: IOException){
                return gson.toJson(HashMap<String, Any>().also {
                    it["ok"] = false
                    it["error"] = "IOException"
                })
            }catch (e: Exception) {
                return gson.toJson(HashMap<String, Any>().also {
                    it["ok"] = false
                    it["error"] = "Unexpected"
                })
            }
        }
        @JavascriptInterface
        fun read(path: String): String{
            val filepath = path.trim()
            if(filepath != ""){
                try {
                    var fileInputStream: FileInputStream? =
                        context.openFileInput(filepath)
                    var inputStreamReader: InputStreamReader =
                        InputStreamReader(fileInputStream)
                    val bufferedReader: BufferedReader =
                        BufferedReader(inputStreamReader)
                    val sb: StringBuilder = StringBuilder()
                    var line: String?
                    while (bufferedReader.readLine().also { line = it } != null) {
                        sb.append(line)
                    }
                    return gson.toJson(HashMap<String, Any>().also {
                        it["ok"] = true
                        it["data"] = sb.toString()
                    })
                } catch (e: FileNotFoundException) {
                    return gson.toJson(HashMap<String, Any>().also {
                        it["ok"] = true
                        it["data"] = ""
                    })
                } catch (e: UnsupportedEncodingException) {
                    return gson.toJson(HashMap<String, Any>().also {
                        it["ok"] = false
                        it["error"] = "UnsupportedEncodingException"
                    })
                } catch (e: IOException) {
                    return gson.toJson(HashMap<String, Any>().also {
                        it["ok"] = false
                        it["error"] = "Unexpected"
                    })
                }
            }else{
                return gson.toJson(HashMap<String, Any>().also {
                    it["ok"] = false
                    it["error"] = "EmptyFilePath"
                })
            }
        }
    }
    var enableInternalStorageApi: Boolean = false
        set(value: Boolean){
            if(field != value){
                if(value)
                    addApi("InternalStorage", internalStorageJSApi)
                else
                    removeApi("InternalStorage")
            }
            field = value
        }

    @SuppressLint("SetJavaScriptEnabled", "JavascriptInterface")
    fun onCreate(savedInstanceState: Bundle?) {
        view?.let {
            if (!created) {
                it.settings.apply {
                    javaScriptEnabled = true
                    allowFileAccess = true
                    allowContentAccess = true
                    allowUniversalAccessFromFileURLs = true
                    allowFileAccessFromFileURLs = true
                    loadsImagesAutomatically = true
                }

                for ((name, obj) in api) {
                    it.addJavascriptInterface(obj, name)
                }
                it.webViewClient = EasyWebViewClient()
                it.webChromeClient = WebChromeClient()

                it.loadUrl(url)
            }
            created = true
            if (savedInstanceState != null) it.restoreState(savedInstanceState)
        }
    }
}