<template>
  <div>
    <!--
    id: Long,
	name: String,
	description: String,
	status: String?,
	img: text?,
	regDate: Date,
	modDate: Date
    -->
    <el-form :model="form" ref="totalForm" :rules="form.rules" label-width="120px">
      <el-form-item label="프로젝트 명" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="내용" prop="desc">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>

      <el-form-item label="상태" prop="status">
        <el-select v-model="form.status" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="이미지 url" prop="img">
        <el-input v-model="form.img"></el-input>
      </el-form-item>

      <el-form-item  label="참가자" prop="selectedMember">
        <el-autocomplete
          v-model="form.searchMember"
          class="inline-input"
          placeholder="검색어를 입력하세요"
          :trigger-on-focus="false"
          :fetch-suggestions="querySearch"
          @select="handleSelect"
        >
          <template #default="{ item }">
            <div class="value">{{ item.value }}</div>
          </template>
        </el-autocomplete>

        <div>
          <el-tag v-for="item in form.selectedMember" :key="item" closable @close="handleClose(item)" >
            {{item}}
          </el-tag>
        </div>

      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="create">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { FieldErrorList } from "async-validator";
import { ElForm } from "element-plus";

export default defineComponent({
  name: "ProjectReg",
  setup() {
    const form = reactive({
      name: "",
      status: "",
      img: "",
      desc: "",
      searchMember: "",
      selectedMember: new Array<string>(),
      rules: {
        name: [ {required: true, message: '프로젝트 이름을 넣어주세요', trigger: 'blur'} ],
        desc: [ {message: '프로젝트 설명을 입력해주세요', trigger: 'blur'} ],
        status: [ {required: true, message: '프로젝트의 상태를 입력해주세요', trigger: 'blur'} ],
        img: [ {message: '프로젝트 관련 이미지를 넣어주세요', trigger: 'blur'} ],
        selectedMember: [ {type: 'array', required: true, min: 1, message: '1명 이상 멤버를 선택해주세요'} ]
      }
    });

    interface Callback { (isValid?: boolean, invalidFields?: FieldErrorList): void; }
    type MElForm = { validate: (callback?: Callback) => Promise<boolean> }

    const totalForm = ref<MElForm>();
    const create = () => {
      totalForm.value?.validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    };
    const querySearch = (queryString: string, cb: (result: {value: string}[]) => void) => {
      // if(queryString.length > 3) {
        // axios.get('/api/getUser?keyword='+queryString).then(resp => {
        //   if(resp === 200) {
        //     cb(resp.data);
        //   }
        // }, err => {window.console.error(err.response)})
      // }
      if (queryString === "s") {
        cb([{ value: "s1" }, { value: "s2" }]);
      } else if (queryString === "a") {
        cb([{ value: "a1" }, { value: "a2" }]);
      } else {
        cb([]);
      }
    };
    const handleSelect = (selected: {value: string}) => {
      form.selectedMember.push(selected.value);
      form.searchMember = "";
    };
    const handleClose = (tag: string) => form.selectedMember.splice(form.selectedMember.indexOf(tag), 1);

    return {
      form,
      create,
      querySearch,
      handleSelect,
      handleClose,
      totalForm
    };
  },
});
</script>

<style scoped></style>
