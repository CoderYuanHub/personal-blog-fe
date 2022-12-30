<template>
  <el-popover ref="popoverRef" trigger="contextmenu" placement="bottom-start" :showArrow="false">
    <el-button @click="openDialog" type="primary" size="small" text style="margin-left: 35px">
      {{ curCase }}
    </el-button>
    <template #reference>
      <slot></slot>
    </template>
  </el-popover>

  <el-dialog v-model="dialogVisible" :title="curCase" width="500px" center destroyOnClose style="border-radius: 10px">
    <FormCom v-if="!isLogin" ref="formComRef" :schema="schema" :rules="rules" />
    <div v-else>确定退出吗 ?</div>
    <template #footer>
      <el-button @click="hideDialog">取消</el-button>
      <el-button type="primary" color="#626aef" @click="handleConfirm">{{ curCase }}</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useUserStore } from "@/stores/useUserStore";
import { storeToRefs } from "pinia";
import FormCom from "@/components/form-com";
import type { FormRules, PopoverInstance } from "element-plus";
import type { IFromCom, ISchema } from "@/components/form-com/type";
import type { ILoginParams } from "@/http/api/manage/type";

const schema: ISchema[] = [
  {
    component: "input",
    key: "username",
    itemAttrs: {
      label: "账号"
    },
    attrs: {
      type: "text"
    }
  },
  {
    component: "input",
    key: "password",
    itemAttrs: {
      label: "密码"
    },
    attrs: {
      type: "password",
      showPassword: true
    }
  }
];

const rules: FormRules = {
  username: [{ required: true, message: "账号不能为空", trigger: "blur" }],
  password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
};

const popoverRef = ref<PopoverInstance>();
const formComRef = ref<IFromCom>();

const dialogVisible = ref(false);

const userStore = useUserStore();
const { isLogin } = storeToRefs(userStore);
const { handleLogin, handleLogout } = userStore;

const curCase = computed(() => {
  return isLogin.value ? "登出" : "登录";
});

const openDialog = () => {
  popoverRef.value!.hide();
  dialogVisible.value = true;
};

const hideDialog = () => {
  dialogVisible.value = false;
};

const handleConfirm = async () => {
  if (formComRef.value && !(await formComRef.value.validate())) return;
  if (isLogin.value) {
    handleLogout();
  } else {
    const loginFormData = formComRef.value!.getFormData() as ILoginParams;
    handleLogin(loginFormData);
  }
  hideDialog();
};
</script>

<style scoped lang="less"></style>
