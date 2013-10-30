JournalApp::Application.routes.draw do
  resources :posts, :only => [:index, :create, :destroy]
  
  # root :to => "posts#index"
  root :to => "static_pages#root"
end
