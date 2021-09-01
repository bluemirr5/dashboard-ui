<template>
  <el-container>
    <el-header>globalHeader</el-header>
    <el-main>
      <el-row gutter="4" justify="center">
        <el-col :span="8" v-for="item in projectList">
          <article style="border: 1px solid #ccc; border-radius: 4px">
            <header style="border-bottom: 1px solid #ccc">
              <h3 style="text-align: left; padding-left: 10px;">
                {{item.projectTitle}}
              </h3>
            </header>
            <section>
              <div class="card-body" :class="{'card-body-dim': !item.projectStatus}">
                <div class="project-item__desc">{{item.projectDesc}}</div>
                <div class="project-item__member">
                  <el-tag class="project-item__member-item" v-for="member in item.projectMembers" size="mini">{{member}}</el-tag>
                </div>
              </div>
            </section>
          </article>




          <!-- el-card class="project-item__wrapper" shadow="hover">
            <template #header>
              <div class="card-header">
                <span>{{ item.projectTitle }}</span>
                <el-check-tag class="project-item__status" :checked="item.projectStatus" size="mini">{{item.projectStatus?'active':'inactive'}}</el-check-tag>
              </div>
            </template>

            <template v-slot="body" style="padding: 0">
              <div class="card-body">
                <div class="project-item__desc">{{item.projectDesc}}</div>
                <div class="project-item__member">
                  <el-tag class="project-item__member-item" v-for="member in item.projectMembers" size="mini">{{member}}</el-tag>
                </div>
              </div>
            </template>
          </el-card -->
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "ProjectList",

  setup() {
    const projectList = ref([
      { projectTitle: 'projectTitle', projectStatus: true, projectDesc: 'description', projectMembers: ['mem1', 'mem2', 'mem3'] },
      { projectTitle: 'projectTitle2', projectStatus: false, projectDesc: 'description3', projectMembers: ['mem1', 'mem2', 'mem3'] }
    ]);
    return {
      projectList
    };
  },
});
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font: {
      size: 16px;
      weight: 700;
    }
  }
}
.card-body.card-body-dim{
  &::after {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: black;
    opacity: .2;
  }
}
.card-body {
  position: relative;
  padding: 20px;
  .project-item__desc {
    font-size: 16px;
  }

  .project-item__wrapper {
    text-align: left;

    .project-item__member {
      margin-top: 20px;

      .el-tag {
        margin-right: 10px;
      }
    }
  }
}

</style>
