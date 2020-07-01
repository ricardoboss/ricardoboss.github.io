<script>
  import Alias from '~/pages/projects';

  Alias.head = function() {
    return {
      link: [
        { hid: 'canonical', rel: 'canonical', href: '/projects' }
      ]
    }
  };

	export default Alias;
</script>
