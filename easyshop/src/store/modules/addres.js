import {getaddres,addAddress} from "../../services/index"
import {observable,action} from "mobx"

export default class addres{
    @observable getaddresList={}; 
    //获取我的地址列表
    @action getaddresData=  (info)=>{
        getaddres(info).then(res => {
           this.getaddresList=res
           console.log(res)
        })
    }
     //添加---修改我的地址
     @action changeAddress=async (info)=>{
       let data=await addAddress(info)
       console.log(data)
    }
}