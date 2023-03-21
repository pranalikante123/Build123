<template>
  <div class="row" style="margin: 10px">
    <div class="btn btn-primary">Violation Tree</div>
  </div>
  <div class="row col-sm-12">
    <div class="row-sm-4">
      <div class="btn btn-primary" style="margin: 10px">Select Account</div>
      <select class="menu-item"  @change="onChange($event)">
        <option>Select Account</option>
        <option v-for="item in value" :key="item.Id">{{ item.Account }}</option>
      </select>
      <div class="btn btn-primary" style="margin: 10px">Select Service</div>
      <select class="menu-item" @change="onChange($event)">
        <option>Select Services</option>
        <option>EC2</option>
        <option>S3</option>
      </select>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
    </div>
  </div>
  <div class="block-tree">
    
    <blocks-tree
      :data="treeData"
      :horizontal="treeOrientation == '0'"
      :collapsable="true" 
    ></blocks-tree>
  </div>
  <body>
    <div class="spacer"></div>
    <footer class="footer">©2022, Maldotech.com</footer>
    </body>
</template>
<script>

import account from "../components/Account.json";

export default {
  data() {
    return {
      account: null,
      data: "",
      sg_data: "",
      ec2_data: "",
      EBS:'',
    ids:'',
      value: account,
      treeOrientation: 0,
      treeData: {
        label: "Instance id",
        expand: true,
        some_id: 1,
        children: [
          { label: "null", some_id: 2 },
          { label: "null", some_id: 3 },
          { label: "null", some_id: 4,
                    expand: false, 
                    children: [
                        { label: 'null', some_id: 5 },
                        { label: 'null', some_id: 6, 
                        },
                    ]
                },
          
        ],
      },
      onChange(e) {
        this.account = e.target.value;

        try {
          if ((this.account == !this.data, this.sg_data, this.ec2_data)) {
            (this.treeData.label = 'Data Not Found'),
            (this.treeData.children[0].label = 'Data Not Found'),
            (this.treeData.children[1].label = 'Data Not Found'),
            (this.treeData.children[2].label = 'Data Not Found');
            (this.treeData.children[2].children[0].label = 'Data Not Found')
          }

        this.data = require("../components/" +this.account +"/i-00a4111a12fc1b44a_Ebs.json");
        this.sg_data = require("../components/" +this.account +"/i-00a4111a12fc1b44a_sg.json");
        this.ec2_data = require("../components/" +this.account +"/i-00a4111a12fc1b44a_EC2.json");

        this.treeData.children[0].label='../assets/ec2.JPG'

        this.treeData.label = this.ec2_data[0].InstanceId;
        console.log(this.treeData.label);

        if (this.data[0].Encrypted == false) {
          this.treeData.children[0].label =
            "Unencrypted volume:"+ ('\n') + this.data[0].VolumeId;
        } else {
          this.treeData.children[0].label = "No Violation Found";
        }

        if (this.sg_data.PublicIpAddress == undefined) {
          this.treeData.children[1].label ="Null";
        } 
        
        if (this.sg_data[0].SecurityGroupIngress == undefined) {
          this.treeData.children[2].label = "Remove 0.0.0.0 rule in SG";
          this.treeData.children[2].children[0].label = this.sg_data[0].Groups[0].GroupName + ('\n') + ',' + this.sg_data[0].Groups[0].GroupId
        }
        } catch (error) {
          console.log(e);
        }
      },
    };
  },
};
</script>
<style>
.menu-item{
  margin: 4px;
  border-radius: 6px 6px 6px 6px;
  height: 30px;
}
.footer{
  border-radius: 6px 6px 6px 6px;
}
.block-tree{
  font-size: 14px;
  display: inline-block;
  padding: 15px;

}
</style>
