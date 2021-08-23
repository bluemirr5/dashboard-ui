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
    <el-form :model="form" label-width="120px">
      <el-form-item label="프로젝트 명">
      <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="내용">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>

      <el-form-item label="상태">
        <el-select v-model="form.status" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="이미지 url">
        <el-input v-model="form.img"></el-input>
      </el-form-item>

      <el-form-item label="참가자">
        <div v-for="temp in form.user" :key="temp.id">
          <el-checkbox v-model="temp.checked" :label="temp.name + ' - ' + temp.nickName" ></el-checkbox>
        </div>

        <el-autocomplete
          v-model="state2"
          class="inline-input"
          placeholder="검색어를 입력하세요"
          :trigger-on-focus="false"
          :fetch-suggestions="querySearch"
          @select="handleSelect"
        ></el-autocomplete>

        <div>
          <p v-for="item in selectedItems">
            <span>{{item}}</span>
          </p>
        </div>

      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="textLog">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref} from "vue";

export default defineComponent({
  name: "ProjectReg",
  setup() {
    const form = reactive({
      name: '',
      status: '',
      img: '',
      desc: '',
      user: [{id: 1, name: 'test@test.com', nickName: 'test', checked: false},
        {id: 2, name: 'test2@test.com', nickName: 'test3', checked: false},
        {id: 3, name: 'test2@test.com', nickName: 'test3', checked: false}],
      value: []
    })

    const textLog = () => {
      window.console.log(form)
    }


    //

    const state2 = ref('')

    type Temp = {
      value: string,
      link: string
    }
    const selectedItems:string[] = reactive([]);
    const querySearch = (queryString: String, cb: (result: Temp[]) => void) => {
      window.console.log(queryString) //
      // if(queryString.length > 3) {
      //   this.$http.get('api/searchKey?keyword=' + queryString).then(resp => {
      //
      //   })
      // }

      if(queryString === 's')  {
        cb([{value:'s1', link: 'bb'}, {value:'s2', link: 'aa'}])
      } else if(queryString === 'a') {
        cb([{value:'a1', link: 'bb'}, {value:'a2', link: 'aa'}])
      } else {
        cb([])
      }
    };
    const handleSelect = (selected: Temp)=> {
      selectedItems.push(selected.value)
      state2.value = ''
    }

    return {
      form,
      textLog,
      //
      state2,
      querySearch,
      handleSelect,
      selectedItems
    }
  }
});
</script>

<style scoped></style>
