package com.carMasters.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by piratXus on 29.06.2016.
 */
@Controller
public class MainController {
    @Autowired
    ApplicationContext context;

    @RequestMapping(value = "/", method = {RequestMethod.GET})
    public String main() {
        context.getBeanDefinitionNames();

        return "hellowPage";
    }

    @ResponseBody
    @RequestMapping(value = "/hellowAjaxJquaary", method = RequestMethod.POST, consumes = "application/json")
    public String hellowJqury(@RequestBody Name name){
        String str="Hellow ajax ";
        return (str+name.getName());

    }


    @ResponseBody
    @RequestMapping(value = "/hellowAjaxJquaary3000", method = RequestMethod.POST, consumes = "application/json")
    public String hellowJquryTiming(@RequestBody Name name) throws InterruptedException {
        Thread.sleep(30000);
        String str="Hellow ajax (30000) ";
        return (str+name.getName());

    }

    @ResponseBody
    @RequestMapping(value = "/hellowXxhttpJs", method = RequestMethod.POST, consumes = "application/json",produces = "application/json")
    public String hellowJs(@RequestBody Name name){
        String str="Hellow Xhttp ";
        return (str+name.getName());

    }

    @ResponseBody
    @RequestMapping(value = "/hellowXxhttpJs3000", method = RequestMethod.POST, consumes = "application/json",produces = "application/json")
    public String hellowJsTiming(@RequestBody Name name) throws InterruptedException {
        Thread.sleep(30000);
        String str="Hellow Xhttp ";
        return (str+name.getName());

    }



}
