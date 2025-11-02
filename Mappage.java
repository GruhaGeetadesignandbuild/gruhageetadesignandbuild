import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class MapPage extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        out.println("<!DOCTYPE html><html><head><title>GruhaGeeta Map</title></head><body>");
        out.println("<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.2548440428334!2d85.8538659750082!3d20.27496308639533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a1e19bf309d7%3A0x7a160fbe18464448!2sGruhaGeeta%20Designs%20%26%20Build%20%7C%20Interior%20%26%20Architecture!5e0!3m2!1sen!2sin!4v1730318204000!5m2!1sen!2sin' width='100%' height='500' style='border:0;' allowfullscreen='' loading='lazy'></iframe>");
        out.println("</body></html>");
    }
}
