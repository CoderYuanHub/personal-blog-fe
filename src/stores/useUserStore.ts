import { defineStore } from "pinia";
import { ref } from "vue";
import { login, logout } from "@/http/api/manage/manage";
import type { ILoginParams, ILogoutParams } from "@/http/api/manage/type";

export const useUserStore = defineStore("user", () => {
  type UserInfoType = { username: string } | null;

  const userInfo = ref<UserInfoType>(null);

  const isLogin = ref(false);

  const handleLogin = async (loginParams: ILoginParams) => {
    const { data } = await login(loginParams);
    userInfo.value = data;
    isLogin.value = true;
  };

  const handleLogout = async () => {
    await logout(userInfo.value as ILogoutParams);
    userInfo.value = null;
    isLogin.value = false;
  };

  return {
    userInfo,
    isLogin,
    handleLogin,
    handleLogout
  };
});
