resource "kubernetes_namespace" "dummy-app" {
  metadata {
    labels = {
      environment = "stagging",
      region      = "local"
    }

    name = "dummy-app"
  }
}

resource "kubernetes_namespace" "monitoring" {
  metadata {
    labels = {
      environment = "stagging",
      region      = "local"
    }

    name = "monitoring"
  }
}
