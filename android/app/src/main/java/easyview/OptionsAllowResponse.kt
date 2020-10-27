package easyview

import android.webkit.WebResourceResponse
import java.text.SimpleDateFormat
import java.util.*
import kotlin.collections.HashMap

class OptionsAllowResponse {
    companion object{
        private final val formatter: SimpleDateFormat = SimpleDateFormat("E, dd MMM yyyy kk:mm:ss", Locale.US)
        fun build() : WebResourceResponse {
            var date:Date = Date();
            val dateString:String = formatter.format(date);

            var headers:Map<String, String> = HashMap<String, String>().apply {
                put("Connection", "close");
                put("Content-Type", "text/plain");
                put("Date", "$dateString GMT");
                put("Access-Control-Allow-Origin", "*");
                put("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
                put("Access-Control-Max-Age", "600");
                put("Access-Control-Allow-Credentials", "true");
                put("Access-Control-Allow-Headers", "accept, authorization, Content-Type");
                put("Via", "1.1 vegur");
            };

            return WebResourceResponse("text/plain", "UTF-8", 200, "OK", headers, null);
        }
    }
}