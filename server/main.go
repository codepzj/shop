package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("/test", func(c *gin.Context) {
		c.JSON(http.StatusOK, map[string]any{
			"hello": "world",
		})
	})
	r.GET("/test2", func(c *gin.Context) {
		c.JSON(http.StatusForbidden, map[string]any{
			"msg": "傻逼不要传这么大的文件",
		})
	})
	log.Printf("server start at: %s", "http://localhost:8082")
	err := r.Run(":8082")
	if err != nil {
		panic("服务启动失败")
	}
}
