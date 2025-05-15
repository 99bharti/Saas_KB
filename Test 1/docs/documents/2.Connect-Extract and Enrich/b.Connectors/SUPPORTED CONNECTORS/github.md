---
title: "GitHub"
date: 2025-01-21
type: "epkb_post_type_1"
---

To configure the Github Connector and forward audit logs to DNIF, follow the steps below:

1. **Generate an API token**:
    1. Sign in to your Github account using this link: [Github Sign In](https://github.com/login).  
          
          
        ![image6-1](./IMAGES-GitHub/GitHub-1.webp)  
          
        
    
    3. In the upper-right corner of any page, click your profile photo, then click "Settings".  
          
          
        ![image3-3](./IMAGES-GitHub/GitHub-2.webp)  
          
        
    
    5. In the left sidebar, click "Developer settings".  
          
          
        ![image9-2](./IMAGES-GitHub/GitHub-3.webp)  
          
        
    
    7. In the left sidebar, click "Personal access tokens".  
          
          
        ![image5-Jun-02-2023-09-15-50-5909-AM](./IMAGES-GitHub/GitHub-4.webp)  
          
        
    
    9. Click "Generate new token".  
          
          
        ![image7-3](./IMAGES-GitHub/GitHub-5.webp)  
          
        
    
    11. Give your token a descriptive name.  
          
          
        ![image8-2](./IMAGES-GitHub/GitHub-6.webp)  
          
        
    
    13. Set an expiration date for the token.  
          
          
        ![image11](./IMAGES-GitHub/GitHub-7.webp)  
          
        
    
    15. Select the "admin:org" scope permission for the API token.  
          
          
        ![image1-Jun-02-2023-09-17-46-7149-AM](./IMAGES-GitHub/GitHub-8.webp)  
          
        
    
    17. Click "Generate token".  
          
          
        ![image10-2](./IMAGES-GitHub/GitHub-9.webp)  
          
        

3. **Get Enterprise name**:
    1. In the top right corner of your Github Enterprise Server, click your profile photo, then click "Your organizations".
    
    3. The enterprise name will be mentioned on the left-hand side.  
          
          
        ![image2-Jun-02-2023-09-19-59-8411-AM](./IMAGES-GitHub/GitHub-10.webp)  
          
        

5. **Configure the GitHub Connector in DNIF**:  
      
      
    ![image4-4](./IMAGES-GitHub/GitHub-11.webp)   
      
    

**Fill in the following fields:**

1. **Connector Name**: Enter a name for the connector.

3. **Connector Type**: Enter "Github Connector".

5. **API Token**: Enter the API Token generated in step 1.

7. **Organization**: Enter the organization name for Github obtained in step 2.

Once you have filled in the configurations, you should be able to fetch audit logs from Github using the pull method and the Github REST APIs.
