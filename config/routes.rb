JournalApp::Application.routes.draw do
  resources :posts, :only => [:create]
  
  # root :to => "posts#index"
  root :to => "static_pages#root"
end
