package main

import (
	_ "app/docs"
	"app/internal/api/router"
	"app/internal/database"
	"app/internal/logging"
	"fmt"
	"github.com/joho/godotenv"
	"os"
)

// @title Portfolio Service API
// @version 1.0
// @description ultraevs.ru API
func main() {
	if err := godotenv.Load(); err != nil {
		fmt.Printf("environment wasn't loaded: %+v", err)
		os.Exit(1)
	}
	if err := logging.NewLogger(); err != nil {
		fmt.Printf("logger wasn't created: %+v", err)
		os.Exit(1)
	}
	Router := router.NewRouter()
	database.ConnectDatabase()
	if err := Router.Run(os.Getenv("SERVER_PORT")); err != nil {
		logging.Log.Fatalf("server wasn't started: %+v", err)
		os.Exit(1)
	}
}
