<template>
 <div class="row" style="margin:10px">
    <div class="btn btn-primary"> Security Dashboard </div>
  </div>
  <div class="row-sm-4" style="margin:10px">
    <div class="btn btn-primary"> Select Account </div>
      <select class="menu-item" @change="onChange($event)">
        <option>Select Account </option>
        <option v-for="item in value" :key="item.Id">{{ item.Account }}</option>
      </select>
    <div class="btn btn-primary" style="margin: 10px">Select Service</div>
      <select class="menu-item" @change="onChange1($event)">
        <option>Select Services</option>
        <option>Ebs</option>
        <option>Security Group</option>
        <option>EC2</option>
        <option>S3</option>
      </select>
    </div>
    <div class="col-sm-4"></div>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
    
<div class="table1" style="margin:10px">
  <table class="table table-bordered ">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Service Name</th>
          <th scope="col">Resource Name</th>
          <th scope="col">Reported on</th>
          <th scope="col">Violation details</th>
          <th scope="col">Violation Type</th>
          <th scope="col">Possible Resolution</th>
        </tr>
      </thead>
      <tbody class="tbody">
        <tr v-for="(item, index) in filteredData" :key="item.id">
          <td>{{index+1}}</td>
          <td>EBS</td>
          <td>{{item[0].VolumeId}}</td>
          <td>{{currentDate()}}</td>
          <td v-if="item[0].Encrypted === false">Unencrypted EBS Volume</td>
          <td v-if="item[0].Encrypted === false" style="color: red">CRITICAL</td>
          <td v-if="item[0].Encrypted === false">Encrypt ebs using key</td>
        </tr>
        <tr v-for="(item, index) in sg_data" :key="item.id">
          <td>{{index+1}}</td>
          <td>sg</td>
          <td>{{item[0].GroupId}}</td>
          <td>{{currentDate()}}</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr v-for="(item, index) in ec2FilteredData" :key="item.id">
          <td>{{index+1}}</td>
          <td>EC2</td>          
          <td>{{item[0].InstanceId}}</td>
          <td>{{currentDate()}}</td>
          <td v-if="item[0].PublicIpAddress == undefined">No Public IP address</td>
          <td v-if="item[0].PublicIpAddress == undefined" style="color: green">LOW</td>
          <td v-if="item[0].PublicIpAddress == undefined">This Amazon EC2 instance not uses a public IP</td> 
        </tr>
      </tbody>
    </table>
    </div>
    <body>
    <div class="spacer"></div>
    <footer class="footer">©2022, Maldotech.com</footer>
    </body>
    
</template>

<script>

import account from '../components/Account.json'

export default {
data(){
  return{
    
    account :null,
    data: [],
    sg_data: [],
    ec2_data: [],
    EBS:'',
    ids:'',
    s3:'',
    bucket:'',
    policy:'',
    policy1:[],
    value: account,
    onChange(e) {
              //console.log(e.target.value);
              this.account = e.target.value
              console.log(this.account)
              try{
              if(this.account == !this.data,this.sg_data,this.ec2_data)
              {
                this.data = [],
                this.sg_data = [],
                this.ec2_data = []
              }
              this.EBS= require('../components/Instance_id.json')
              var len = this.EBS.length
              for(let i=0;i<len;i++){
              this.ids=this.EBS[i].Instance_id
              //console.log(this.ids)
              this.data.push(require('../components/' +this.account+ '/EBS/' +this.ids+ '_Ebs.json'))
              //console.log(this.data)
              this.sg_data.push(require('../components/' +this.account+ '/SG/' +this.ids+ '_sg.json'))
              console.log(this.sg_data)
              this.ec2_data.push(require('../components/' +this.account+ '/EC2/' +this.ids+ '_EC2.json'))
              }
              }catch (error){
              console.log(e)
              }
    },
    onChange1(e1){
      this.service = e1.target.value
      if(this.service == 'Ebs'){ 
        this.sg_data = []
        this.ec2_data = []
         
      }else if(this.service == 'Security Group'){
        this.data = []
        this.ec2_data = []
        
      }else if(this.service == 'EC2'){
        this.data = []
        this.sg_data = []
        
      }else if(this.service == 'S3'){
        this.data = []
        this.sg_data = []
        this.ec2_data = []
      }
    }
}
},
computed: {
            filteredData: function() {
                return this.data.filter((item) => {
                   return (item[0].Encrypted == false);
                });
            },
            ec2FilteredData: function(){
              return this.ec2_data.filter((item) => {
                   return (item[0].PublicIpAddress == undefined)
              });
            },
        },
methods:{
  currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      return date;
    }
},
mounted(){
  
}
}
</script>

<style>
label{
  font-weight: bold;  
}
.thead-dark tr{
  font-size: 13px;
  color: white;
  background-color: #0d6efd;
  min-height: 0%;
}
.tbody {
  font-size: 13px;
  flex-direction: row;
  justify-content: space-evenly;
  min-height: 0%;
}
.tbody td, tbody tr{
  min-height: 0% !important;
}
.menu-item{
  width: 200px;
  height: 30px;
  margin-left: 10px;
}
.spacer {
    flex: 1;
}
.footer{
    bottom: 10px;
    position: sticky;
    height: 25px;
    text-align: right;
    color: white;
    margin: 10px;
    background-color: #0d6efd;
    font-size: 13px;
    border-radius: 6px 6px 6px 6px;
}
body {
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

</style>
